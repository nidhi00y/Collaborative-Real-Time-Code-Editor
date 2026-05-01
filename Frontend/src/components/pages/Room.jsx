import { Link } from 'react-router-dom';
import '../styles/Room.css';

const topNavItems = [
	{ label: 'Projects', href: '/' },
	{ label: 'Editor', href: '/editor' },
	{ label: 'Library', href: '#' },
	{ label: 'History', href: '#' },
];

const visibilityOptions = [
	{ label: 'Public', icon: '◉', active: true },
	{ label: 'Private', icon: '▢' },
];

function Room() {
	return (
		<div className="room-page">
			<header className="room-topbar">
				<div className="room-brand">
					<span className="brand-mark">▣</span>
					<span>DevDesign Studio</span>
				</div>

				<nav className="room-nav" aria-label="Primary navigation">
					{topNavItems.map((item) => (
						<Link key={item.label} to={item.href} className={`room-nav-link ${item.label === 'Editor' ? 'active' : ''}`}>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="room-topbar-actions">
					<button type="button" className="icon-chip" aria-label="Notifications">
						◔
					</button>
					<button type="button" className="icon-chip" aria-label="Settings">
						⚙
					</button>
					<button type="button" className="profile-chip" aria-label="Profile">
						AK
					</button>
				</div>
			</header>

			<div className="room-shell">
				<aside className="room-sidebar" aria-label="Workspace navigation">
					<button type="button" className="sidebar-icon active" aria-label="Collaboration hub">
						⌘
					</button>
					<button type="button" className="sidebar-icon" aria-label="Grid view">
						▦
					</button>
					<button type="button" className="sidebar-icon" aria-label="Layers">
						◫
					</button>
					<button type="button" className="sidebar-icon" aria-label="History">
						↺
					</button>
					<div className="sidebar-divider" />
					<button type="button" className="sidebar-icon" aria-label="Documents">
						▤
					</button>
					<button type="button" className="sidebar-icon" aria-label="Console">
						▭
					</button>
				</aside>

				<main className="room-main">
					<section className="room-hero">
						<h1>Collaboration Hub</h1>
						<p>
							Connect with your team in real-time. Join an existing design session or initialize a new secure workspace for your project.
						</p>
					</section>

					<section className="room-grid">
						<div className="room-column">
							<section className="room-card join-card">
								<div className="card-heading">
									<div className="card-icon join">↪</div>
									<div>
										<h2>Join Room</h2>
									</div>
								</div>
								<p>Enter a 6-digit access code or a direct invite link to enter an active session.</p>

								<div className="field-block">
									<label htmlFor="room-code">ROOM ACCESS CODE</label>
									<input id="room-code" type="text" placeholder="e.g. ALPHA-992-K" />
								</div>

								<button type="button" className="primary-action">
									Join Session <span aria-hidden="true">→</span>
								</button>
							</section>

							<section className="room-card create-card">
								<div className="card-heading">
									<div className="card-icon create">＋</div>
									<div>
										<h2>Create Room</h2>
									</div>
								</div>
								<div className="field-block">
									<label htmlFor="workspace-name">WORKSPACE NAME</label>
									<input id="workspace-name" type="text" defaultValue="Design Review - Q3" />
								</div>

								<div className="visibility-block">
									<label>VISIBILITY SETTINGS</label>
									<div className="visibility-grid">
										{visibilityOptions.map((option) => (
											<button key={option.label} type="button" className={`visibility-option ${option.active ? 'active' : ''}`}>
												<span className="visibility-icon">{option.icon}</span>
												<span>{option.label}</span>
											</button>
										))}
									</div>
								</div>

								<button type="button" className="secondary-action">
									Initialize Room <span aria-hidden="true">✈</span>
								</button>
							</section>
						</div>

						<section className="room-preview">
							<div className="preview-art" aria-hidden="true">
								<div className="preview-card back" />
								<div className="preview-card front">
									<div className="preview-card-top">
										<span />
										<i />
									</div>
									<div className="preview-card-body">
										<span />
										<span />
									</div>
								</div>
							</div>

							<div className="room-preview-copy">
								<span>REAL-TIME SYNC</span>
								<h2>Architecture-first collaboration for technical teams.</h2>
							</div>
						</section>
					</section>
				</main>
			</div>
		</div>
	);
}

export default Room;
