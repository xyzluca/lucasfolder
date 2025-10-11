import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://lucakursawe.xyz/', // Site domain
    title: 'lucasfolder', // Site title
    author: 'lucakursawe', // Author name
    description: 'lucasfolder', // Site description
    language: 'en-DE' // Default language
  },

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  general: {
    contentWidth: '35rem', // Content area width
    centeredLayout: true, // Use centered layout (false for left-aligned)
    themeToggle: true, // Show theme toggle button (uses system theme by default)
    postListDottedDivider: true, // Show dotted divider in post list
    footer: true, // Show footer
    fadeAnimation: true, // Enable fade animations
    weatherLocation: true // Show weather and location in footer
  },

  // DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  date: {
    dateFormat: 'DD-MM-YYYY', // Date format: YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    dateSeparator: '.', // Date separator: . - / (except for MONTH DAY YYYY and DAY MONTH YYYY)
    dateOnRight: true // Date position in post list (true for right, false for left)
  },

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  post: {
    readingTime: true, // Show reading time in posts
    toc: true, // Show table of contents (when there is enough page width)
    imageViewer: true, // Enable image viewer
    copyCode: true, // Enable copy button in code blocks
    linkCard: true, // Enable link card
    comments: true // Enable giscus comments
  },

  // COMMENTS SETTINGS ///////////////////////////////////////////////////////////////////////////////////
  comments: {
    provider: 'giscus', // Only giscus is supported for now
    repo: 'xyzluca/lucasfolder', // Your GitHub repository
    repoId: 'R_kgDOP3eXgg', // Repository ID (from your existing setup)
    category: 'General', // Discussion category
    categoryId: 'DIC_kwDOP3eXgs4Cv7e9', // Category ID (from your existing setup)
    mapping: 'pathname', // Comment mapping: pathname, url, title, og:title
    strict: true, // Use strict title matching (as you had before)
    reactionsEnabled: false, // Disable reactions for minimal look
    emitMetadata: false, // Disable metadata for cleaner interface
    inputPosition: 'bottom', // Keep input at bottom
    theme: 'noborder_dark', // Ultra minimal theme
    lang: 'en' // Language code
  }
}
