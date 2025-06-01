// script.js
// 共享的JavaScript功能

// 初始化导航
function initNavigation() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// 显示新闻
function displayNews(newsData, count, containerId) {
    const newsContainer = document.getElementById(containerId);
    if (!newsContainer) return;
    
    newsContainer.innerHTML = '';
    
    // 确定要显示的项目数量
    const displayCount = count > 0 ? Math.min(count, newsData.length) : newsData.length;
    const displayData = newsData.slice(0, displayCount);
    
    if (displayData.length === 0) {
        newsContainer.innerHTML = '<p>No news available</p>';
        return;
    }
    
    displayData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="news-date"><i class="far fa-calendar-alt"></i> ${news.date}</div>
            <div class="news-content">${news.content}</div>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// 显示研究项目
function displayResearch(researchData, count, containerId) {
    const researchContainer = document.getElementById(containerId);
    if (!researchContainer) return;
    
    researchContainer.innerHTML = '';
    
    // 确定要显示的项目数量
    const displayCount = count > 0 ? Math.min(count, researchData.length) : researchData.length;
    const displayData = researchData.slice(0, displayCount);
    
    if (displayData.length === 0) {
        researchContainer.innerHTML = '<p>No research projects available</p>';
        return;
    }
    
    // 创建网格容器
    const researchGrid = document.createElement('div');
    researchGrid.className = 'research-grid';
    researchContainer.appendChild(researchGrid);
    
    displayData.forEach(research => {
        const researchCard = document.createElement('div');
        researchCard.className = 'research-card';
        researchCard.innerHTML = `
            <div class="research-image">
                <i class="${research.icon}"></i>
            </div>
            <div class="research-content">
                <h3 class="research-title">${research.title}</h3>
                <p class="research-desc">${research.description}</p>
                <a href="${research.link}" class="link-btn"><i class="fas fa-arrow-right"></i> Learn More</a>
            </div>
        `;
        researchGrid.appendChild(researchCard);
    });
}

// 显示出版物
function displayPublications(publicationsData, count, containerId) {
    const publicationsContainer = document.getElementById(containerId);
    if (!publicationsContainer) return;
    
    publicationsContainer.innerHTML = '';
    
    // 按年份排序（最新优先）
    const sortedPublications = [...publicationsData].sort((a, b) => b.year - a.year);
    
    // 确定要显示的项目数量
    const displayCount = count > 0 ? Math.min(count, sortedPublications.length) : sortedPublications.length;
    const displayData = sortedPublications.slice(0, displayCount);
    
    if (displayData.length === 0) {
        publicationsContainer.innerHTML = '<p>No publications available</p>';
        return;
    }
    
    // 创建出版物列表
    const pubList = document.createElement('div');
    pubList.className = 'publication-list';
    publicationsContainer.appendChild(pubList);
    
    displayData.forEach((pub, index) => {
        const pubItem = document.createElement('div');
        pubItem.className = 'publication-item';
        
        // 生成链接HTML（如果存在）
        let linksHTML = '';
        if (pub.pdf) linksHTML += `<a href="${pub.pdf}" class="publication-link"><i class="far fa-file-pdf"></i> PDF</a>`;
        if (pub.code) linksHTML += `<a href="${pub.code}" class="publication-link"><i class="fab fa-github"></i> Code</a>`;
        if (pub.project) linksHTML += `<a href="${pub.project}" class="publication-link"><i class="fas fa-external-link-alt"></i> Project</a>`;
        
        pubItem.innerHTML = `
            <div class="publication-title">${pub.title}</div>
            <div class="publication-authors">${pub.authors}</div>
            <div>${pub.journal}, ${pub.year}</div>
            ${linksHTML ? `<div class="publication-details">${linksHTML}</div>` : ''}
        `;
        pubList.appendChild(pubItem);
    });
}