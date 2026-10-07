import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (supabase) {
    const { data: article } = await supabase
      .from('articles')
      .select('seo_title, seo_description, title, excerpt')
      .eq('slug', slug)
      .single();

    if (article) {
      return {
        title: article.seo_title || `${article.title} | EarthImpact Insights`,
        description: article.seo_description || article.excerpt,
        alternates: { canonical: `https://www.earthimpact.co.in/insights/${slug}` },
      };
    }
  }

  // Fallback for what-are-edcs
  if (slug === 'what-are-edcs') {
    return {
      title: 'What Are Endocrine-Disrupting Chemicals (EDCs)? | EarthImpact Insights',
      description: 'EDCs are chemicals that interfere with the body\'s hormonal system.',
    };
  }

  return {
    title: 'EarthImpact Insights',
  };
}export const instant = false;

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  let article = null;

  if (supabase) {
    const { data } = await supabase
      .from('articles')
      .select(`
        *,
        categories ( name )
      `)
      .eq('slug', slug)
      .eq('status', 'PUBLISHED')
      .single();
    
    article = data;
  }

  // If not found in Supabase, 404
  if (!article) {
    notFound();
  }

  // Render article dynamically
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/insights" className={styles.breadcrumbLink}>← Back to Insights</Link>
          </div>
          <div className={styles.articleMeta}>
            <span className={styles.articleTag}>{article.categories?.name || 'Insight'}</span>
            <span className={styles.articleDate}>
              {new Date(article.published_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            {article.reading_time && <span className={styles.articleRead}>{article.reading_time} min read</span>}
          </div>
          <h1 className={styles.heroTitle}>{article.title}</h1>
          <p className={styles.heroDesc}>{article.excerpt}</p>
          <div className={styles.authorRow}>
            <img src="/images/founder/soham.jpg" alt="Author" className={styles.authorAvatar} />
            <div>
              <span className={styles.authorName}>EarthImpact Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ARTICLE BODY ===================== */}
      <article className={`${styles.article} section`}>
        <div className="container">
          <div className={styles.articleLayout}>
            <div 
              className={styles.articleBody} 
              dangerouslySetInnerHTML={{ __html: article.content || '<p>Content coming soon...</p>' }} 
            />
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <p className={styles.sidebarTitle}>More Articles</p>
                <Link href="/insights" className={styles.sidebarLink}>← All Insights</Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
