const documentsData = {
    process: [
        {
            title: '敏捷项目管理启动指南',
            summary: '涵盖 Scrum / Kanban 的启动会议模板、角色定义及迭代计划。',
            link: '/docs/agile-start-guide'
        },
        {
            title: '混合项目生命周期 (Hybrid) 最佳实践',
            summary: '针对瀑布+敏捷混合模式的风险应对与阶段关口定义。',
            link: '/docs/hybrid-lifecycle'
        },
        {
            title: '变更控制流程模板 (v2.3)',
            summary: '包含变更请求表、影响分析矩阵及批准流程。',
            link: '/docs/change-control-template'
        }
    ],
    tools: [
        {
            title: 'Jira 自动化规则库',
            summary: '20个常见自动化规则：自动分配、状态联动、到期提醒。',
            link: '/docs/jira-automation-rules'
        },
        {
            title: 'MS Project 甘特图高级技巧',
            summary: '资源平衡、关键路径高亮、基准线设置。',
            link: '/docs/ms-project-advanced'
        },
        {
            title: '远程协作工具清单',
            summary: 'Miro / FigJam / Asana 的PM场景用法对比。',
            link: '/docs/remote-tools-checklist'
        }
    ],
    quality: [
        {
            title: '质量审计核对表 (ISO 9001)',
            summary: '涵盖过程审计、文档完整性、不符合项跟踪。',
            link: '/docs/quality-audit-checklist'
        },
        {
            title: '缺陷预防根本原因分析模板',
            summary: '基于5Whys和鱼骨图的实操模板。',
            link: '/docs/rca-template'
        },
        {
            title: '六西格玛 DMAIC 快速参考卡',
            summary: '定义、测量、分析、改进、控制阶段的典型工具速查。',
            link: '/docs/dmaic-quickref'
        }
    ],
    compliance: [
        {
            title: 'GDPR 项目合规自查表',
            summary: '涉及数据映射、同意管理、供应商评估。',
            link: '/docs/gdpr-compliance-check'
        },
        {
            title: '金融行业项目合规要点 (PCI DSS)',
            summary: '针对支付卡行业的数据安全标准在项目中的落地。',
            link: '/docs/pci-dss-guidelines'
        },
        {
            title: '政府项目合规要求基线',
            summary: '联邦/州级采购合同的关键合规条款。',
            link: '/docs/gov-compliance-baseline'
        }
    ]
};

const calendarData = {
    1: {
        updates: [
            { date: '2026-01-10', title: '发布《2026年PM薪酬趋势报告》', desc: '最新行业薪酬调研数据已上线' },
            { date: '2026-01-18', title: '新增"混合项目风险管理"文档', desc: '针对混合项目模式的专项风险管理指南' },
            { date: '2026-01-22', title: '社群模板库更新：WBS词典模板 v3', desc: '新增资源分配和依赖关系字段' }
        ],
        events: [
            { date: '2026-01-15 19:00 (CST)', title: '线上分享：用AI提升项目预测准确性', desc: '探索AI工具在项目预测中的应用', link: '#' },
            { date: '2026-01-28 15:00 (GMT)', title: '专家圆桌：2026合规趋势展望', desc: '行业专家解读最新合规动态', link: '#' }
        ]
    },
    2: {
        updates: [
            { date: '2026-02-05', title: '发布《敏捷转型成功案例集》', desc: '10个企业敏捷转型实战案例' },
            { date: '2026-02-12', title: 'Tools板块新增"Jira高级报表配置"', desc: '自定义仪表板和数据可视化指南' }
        ],
        events: [
            { date: '2026-02-20 14:00 (CST)', title: '工作坊：敏捷估算与规划扑克', desc: '实战演练敏捷估算技巧', link: '#' }
        ]
    },
    3: {
        updates: [
            { date: '2026-03-08', title: 'Process板块更新"项目启动检查清单"', desc: '新增风险识别和干系人分析模块' },
            { date: '2026-03-15', title: '发布《2026 Q1 PM工具趋势报告》', desc: '最新项目管理工具使用调研' }
        ],
        events: [
            { date: '2026-03-10 10:00 (EST)', title: '线上研讨会：远程团队协作最佳实践', desc: '分布式团队管理经验分享', link: '#' },
            { date: '2026-03-25 16:00 (GMT)', title: 'PM认证考试答疑直播', desc: 'PMP/PRINCE2考试技巧分享', link: '#' }
        ]
    },
    4: {
        updates: [
            { date: '2026-04-02', title: 'Compliance板块新增"数据隐私合规指南"', desc: 'GDPR/CCPA合规实操手册' }
        ],
        events: [
            { date: '2026-04-15 19:00 (CST)', title: '专家分享：项目组合管理实践', desc: '企业级项目组合管理经验', link: '#' }
        ]
    },
    5: {
        updates: [],
        events: []
    },
    6: {
        updates: [
            { date: '2026-06-01', title: 'Process板块新增《SAFe 6.0 实施指南》', desc: '大规模敏捷框架最新版本解读' },
            { date: '2026-06-14', title: 'Tools板块更新"Notion项目管理数据库模板"', desc: '优化数据库结构和视图配置' },
            { date: '2026-06-20', title: '社群博客《质量门 (Quality Gate) 自动化实践》', desc: 'CI/CD流程中的质量门集成方案' }
        ],
        events: [
            { date: '2026-06-08 全天', title: 'PM Collective 年度线上峰会', desc: '主题：韧性项目领导力', link: '#' },
            { date: '2026-06-22 20:00 (EST)', title: '工作坊：敏捷估算与规划扑克实战', desc: '互动式敏捷规划演练', link: '#' }
        ]
    },
    7: {
        updates: [
            { date: '2026-07-10', title: '发布《项目风险管理实战手册》', desc: '从识别到应对的完整风险管理流程' },
            { date: '2026-07-18', title: 'Quality板块新增"持续改进KPI仪表板"', desc: '可定制的质量指标追踪模板' }
        ],
        events: [
            { date: '2026-07-15 15:00 (CST)', title: '线上分享：项目复盘方法论', desc: '如何进行有效的项目回顾', link: '#' }
        ]
    },
    8: {
        updates: [
            { date: '2026-08-05', title: 'Tools板块新增"Microsoft Project 2026新功能解读"', desc: '最新版本功能详解和使用技巧' }
        ],
        events: [
            { date: '2026-08-12 10:00 (GMT)', title: '专家访谈：AI在项目管理中的应用', desc: '行业专家探讨AI工具的实际应用', link: '#' },
            { date: '2026-08-25 19:00 (CST)', title: '工作坊：项目沟通计划制定', desc: '构建高效的项目沟通体系', link: '#' }
        ]
    },
    9: {
        updates: [
            { date: '2026-09-08', title: 'Process板块更新"项目收尾最佳实践"', desc: '项目交付和知识转移完整流程' },
            { date: '2026-09-15', title: '发布《2026 PM技能发展路线图》', desc: '项目经理职业发展指导' }
        ],
        events: [
            { date: '2026-09-20 14:00 (EST)', title: '线上研讨会：跨文化项目管理', desc: '全球化项目的沟通与协作', link: '#' }
        ]
    },
    10: {
        updates: [
            { date: '2026-10-03', title: 'Compliance板块新增"ESG项目合规框架"', desc: '环境、社会和治理项目管理指南' },
            { date: '2026-10-12', title: 'Quality板块更新"测试自动化策略"', desc: '测试驱动开发在项目中的应用' }
        ],
        events: [
            { date: '2026-10-18 16:00 (GMT)', title: '专家分享：项目预算管理技巧', desc: '成本控制和预算优化实战', link: '#' }
        ]
    },
    11: {
        updates: [
            { date: '2026-11-05', title: 'Tools板块新增"协作工具集成指南"', desc: '主流项目管理工具的集成方案' },
            { date: '2026-11-15', title: '发布《2026年度PM工具评测报告》', desc: '30款项目管理工具横向对比' }
        ],
        events: [
            { date: '2026-11-20 19:00 (CST)', title: '工作坊：项目风险管理实战', desc: '风险识别、评估和应对策略', link: '#' }
        ]
    },
    12: {
        updates: [
            { date: '2026-12-05', title: '发布《2026年度项目失败案例分析合集》', desc: '从失败中学习的项目管理经验' },
            { date: '2026-12-18', title: 'Compliance板块新增"欧盟网络弹性法案对项目的影响"', desc: '最新网络安全合规要求解读' }
        ],
        events: [
            { date: '2026-12-03 ～ 2026-12-10', title: '年终PM认证优惠周', desc: 'PMP/PRINCE2认证考试折扣活动', link: '#' },
            { date: '2026-12-16 11:00 (CET)', title: '复盘会议模拟：2027年规划冲刺', desc: '年度总结与新年规划', link: '#' }
        ]
    }
};

function renderDocuments() {
    const categories = [
        { id: 'process-cards', data: documentsData.process },
        { id: 'tools-cards', data: documentsData.tools },
        { id: 'quality-cards', data: documentsData.quality },
        { id: 'compliance-cards', data: documentsData.compliance }
    ];

    categories.forEach(category => {
        const container = document.getElementById(category.id);
        container.innerHTML = category.data.map(doc => `
            <div class="doc-card">
                <h4 class="doc-title">${doc.title}</h4>
                <p class="doc-summary">${doc.summary}</p>
                <a href="${doc.link}" class="doc-link" target="_blank" rel="noopener noreferrer">
                    查看详情 →
                </a>
            </div>
        `).join('');
    });
}

function renderMonthButtons() {
    const monthGrid = document.getElementById('month-grid');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    monthGrid.innerHTML = months.map((month, index) => {
        const monthNum = index + 1;
        const isActive = monthNum === 1 ? 'active' : '';
        return `<button class="month-btn ${isActive}" data-month="${monthNum}">${month}</button>`;
    }).join('');

    monthGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('month-btn')) {
            const buttons = document.querySelectorAll('.month-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            const month = parseInt(e.target.dataset.month);
            renderCalendarData(month);
        }
    });
}

function renderCalendarData(month) {
    const data = calendarData[month];
    const updatesList = document.getElementById('updates-list');
    const eventsList = document.getElementById('events-list');

    if (data.updates.length === 0) {
        updatesList.innerHTML = '<div class="empty-state">本月暂无社区内容更新</div>';
    } else {
        updatesList.innerHTML = data.updates.map(update => `
            <div class="update-item">
                <div class="update-date">${update.date}</div>
                <div class="update-title">${update.title}</div>
                <div class="update-desc">${update.desc}</div>
            </div>
        `).join('');
    }

    if (data.events.length === 0) {
        eventsList.innerHTML = '<div class="empty-state">目前未安排活动，请关注下个月</div>';
    } else {
        eventsList.innerHTML = data.events.map(event => `
            <div class="event-item">
                <div class="event-date">${event.date}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-desc">${event.desc}</div>
                ${event.link ? `<a href="${event.link}" class="event-link" target="_blank" rel="noopener noreferrer">报名链接 →</a>` : ''}
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderDocuments();
    renderMonthButtons();
    renderCalendarData(1);
});