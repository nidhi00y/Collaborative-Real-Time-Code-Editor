import { Link } from 'react-router-dom';
import '../styles/Home.css';

const navItems = ['Projects', 'Editor', 'Rooms', 'History'];

const quickActions = [
	{
		title: 'Blank Screen',
		subtitle: 'Start from absolute zero',
		badge: '+',
		accent: 'blue',
	},
	{
		title: 'Landing Page',
		subtitle: 'Optimized for conversion',
		badge: '▭',
		accent: 'green',
	},
	{
		title: 'Dashboard',
		subtitle: 'Data-rich enterprise shell',
		badge: '▥',
		accent: 'pink',
	},
];

const recentProjects = [
	{
		name: 'Project Alpha',
		meta: 'Edited 2h ago by you',
		tags: ['React', 'v2.4'],
		image:
			'linear-gradient(135deg, rgba(28, 51, 86, 0.95), rgba(9, 15, 35, 0.95) 45%, rgba(23, 78, 99, 0.95))',
	},
	{
		name: 'Design System Beta',
		meta: 'Edited 5h ago by Sarah',
		tags: ['Vue', 'Stable'],
		image:
			'linear-gradient(135deg, rgba(28, 46, 73, 0.95), rgba(11, 17, 37, 0.95) 45%, rgba(18, 87, 78, 0.95))',
	},
];

const activityItems = [
	{
		color: 'violet',
		user: 'Sarah K. pushed to main',
		detail: 'feat: add layout transitions',
		time: '12M AGO',
	},
	{
		color: 'blue',
		user: 'Marcus L. edited Color System',
		detail: 'Updated semantic tokens for dark mode',
		time: '45M AGO',
	},
	{
		color: 'green',
		user: 'New Comment on Hero.jsx',
		detail: '"Can we use a lighter weight here?"',
		time: '1H AGO',
	},
	{
		color: 'slate',
		user: 'Production Build succeeded',
		detail: 'Project Alpha live at alpha-studio.dev',
		time: '3H AGO',
	},
];

function Card({ title, subtitle, badge, accent }) {
	return (
		<article className={`quick-card ${accent}`}>
			<div className="quick-card-icon">{badge}</div>
			<div>
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</div>
		</article>
	);
}

function Home() {
	return (
		<div className="home-shell">
			<aside className="home-sidebar">
				<div className="sidebar-logo">DD</div>
				<nav className="sidebar-nav" aria-label="Sidebar navigation">
					<button className="sidebar-nav-item active" type="button">
						<span className="nav-icon">◫</span>
						<span>Dashboard</span>
					</button>
					<button className="sidebar-nav-item" type="button">
						<span className="nav-icon">⌁</span>
						<span>Workspace</span>
					</button>
					<button className="sidebar-nav-item" type="button">
						<span className="nav-icon">◈</span>
						<span>Components</span>
					</button>
					<button className="sidebar-nav-item" type="button">
						<span className="nav-icon">▤</span>
						<span>Rooms</span>
					</button>
				</nav>
				<div className="sidebar-bottom">
					<button className="sidebar-nav-item" type="button">
						<span className="nav-icon">▣</span>
						<span>Logout</span>
					</button>
				</div>
			</aside>

			<div className="home-main">
				<header className="home-topbar">
					<div className="brand-block">
						<div className="brand-mark">▣</div>
						<span>DevDesign Studio</span>
					</div>

					<nav className="top-nav" aria-label="Primary navigation">
						{navItems.map((item) => (
							<a key={item} href="#" className={`top-nav-link ${item === 'Projects' ? 'active' : ''}`}>
								{item}
							</a>
						))}
					</nav>

					<div className="topbar-actions">
						<label className="search-box" aria-label="Search resources">
							<span className="search-icon">⌕</span>
							<input type="search" placeholder="Search resources..." />
						</label>
						<button className="icon-button" type="button" aria-label="Notifications">
							<span>◔</span>
						</button>
						<button className="icon-button" type="button" aria-label="Settings">
							<span>⚙</span>
						</button>
						<button className="profile-button" type="button" aria-label="Profile">
							<span>AK</span>
						</button>
					</div>
				</header>

				<main className="home-content">
					<section className="hero-block">
						<h1>Welcome back, Alex</h1>
						<p>
							Your workspace is synced across 3 devices. You have 2 active collaborative sessions in Project Alpha.
						</p>
					</section>

					<section className="quick-grid" aria-label="Quick start actions">
						{quickActions.map((item) => (
							<Card key={item.title} {...item} />
						))}
					</section>

					<section className="dashboard-grid">
						<div className="projects-column">
							<div className="section-heading-row">
								<h2>Recent Projects</h2>
								<a href="#" className="view-all-link">
									View All
								</a>
							</div>

							<div className="project-grid">
								{recentProjects.map((project) => (
									<article className="project-card" key={project.name}>
										<div className="project-preview" style={{ background: project.image }}>
											<div className="project-tags">
												{project.tags.map((tag) => (
													<span key={tag}>{tag}</span>
												))}
											</div>
										</div>
										<div className="project-body">
											<div>
												<h3>{project.name}</h3>
												<p>{project.meta}</p>
											</div>
											<button type="button" className="project-menu" aria-label={`Open ${project.name} menu`}>
												⋮
											</button>
										</div>
									</article>
								))}
							</div>
						</div>

						<aside className="activity-panel">
							<div className="section-heading-row">
								<h2>Team Activity</h2>
								<button type="button" className="panel-action" aria-label="Refresh activity">
									⟲
								</button>
							</div>

							<div className="activity-list">
								{activityItems.map((item) => (
									<div className="activity-item" key={`${item.user}-${item.time}`}>
										<div className={`activity-badge ${item.color}`} />
										<div className="activity-copy">
											<strong>{item.user}</strong>
											<p>{item.detail}</p>
											<span>{item.time}</span>
										</div>
									</div>
								))}
							</div>

							<button type="button" className="invite-button">
								Invite Team Member
							</button>
						</aside>
					</section>
				</main>

				<button type="button" className="floating-action" aria-label="Create new item">
					+
				</button>
			</div>
		</div>
	);
}

export default Home;
