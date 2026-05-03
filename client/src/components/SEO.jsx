import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, ogImage, ogType = 'website', keywords }) => {
    const siteTitle = "Abhay Singh Chauhan | 3D Artist & Full Stack Developer";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = "Portfolio of Abhay Singh Chauhan, a 3D Artist and Full Stack Developer specializing in immersive digital experiences, web development, and 3D modeling.";
    const siteUrl = window.location.origin;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            
            {/* Canonical Link */}
            <link rel="canonical" href={canonical ? `${siteUrl}${canonical}` : siteUrl} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical ? `${siteUrl}${canonical}` : siteUrl} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:site_name" content="Abhay Singh Chauhan Portfolio" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Helmet>
    );
};

export default SEO;
