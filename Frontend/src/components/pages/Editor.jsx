import '../styles/Editor.css';

const explorerItems = [
	{ name: 'src', type: 'folder', expanded: true },
	{ name: 'index.html', type: 'file', active: true },
	{ name: 'styles.css', type: 'file' },
	{ name: 'assets', type: 'folder' },
	{ name: 'config.js', type: 'file' },
	{ name: 'README.md', type: 'file' },
];

const codeLines = [
	'<div class="hero-section">',
	'  <h1>Building the Future</h1>',
	'  <p>The workspace for pros.</p>',
	'',
	'  <button class="btn-primary">',
	'    Get Started',
	'  </button>',
	'</div>',
];

const previewStats = [
	{ label: 'VIEWPORT', value: '1440 x 900' },
	{ label: 'FPS', value: '60.0', valueClass: 'accent' },
];

const topNavItems = [
	{ label: 'Projects', href: '/' },
	{ label: 'Editor', href: '/editor', active: true },
	{ label: 'History', href: '#' },
	{ label: 'Rooms', href: '#' },
];

function Editor() {
	return (
		<div className="editor-page">
			<header className="editor-topbar">
				<div className="editor-brand">
					<span className="brand-mark">▣</span>
					<span>DevDesign Studio</span>
				</div>

				<nav className="editor-nav" aria-label="Primary navigation">
					{topNavItems.map((item) => (
						<a key={item.label} href={item.href} className={`editor-nav-link ${item.active ? 'active' : ''}`}>
							{item.label}
						</a>
					))}
				</nav>

				<div className="editor-topbar-actions">
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

			<div className="editor-workspace">
				<aside className="editor-sidebar">
					<div className="sidebar-panel">
						<div className="sidebar-panel-header">
							<span>EXPLORER</span>
							<button type="button" className="panel-menu" aria-label="Explorer options">
								⋯
							</button>
						</div>

						<div className="explorer-tree">
							{explorerItems.map((item) => (
								<div key={item.name} className={`explorer-item ${item.type} ${item.active ? 'active' : ''}`}>
									<span className="explorer-icon">{item.type === 'folder' ? '▸' : '◫'}</span>
									<span>{item.name}</span>
									{item.expanded ? <span className="item-meta">open</span> : null}
								</div>
							))}
						</div>
					</div>
				</aside>

				<main className="editor-main">
					<div className="editor-toolbar">
						<div className="device-switcher" role="tablist" aria-label="Preview mode">
							<button type="button" className="device-button active">
								<span>▣</span>
								Desktop
							</button>
							<button type="button" className="device-button">
								<span>◫</span>
								Mobile
							</button>
						</div>

						<div className="editor-zoom">
							<button type="button" className="zoom-button" aria-label="Zoom out">
								−
							</button>
							<span>100%</span>
							<button type="button" className="zoom-button" aria-label="Zoom in">
								+
							</button>
						</div>

						<div className="editor-toolbar-actions">
							<button type="button" className="run-button">
								<span>▶</span>
								RUN
							</button>
							<button type="button" className="share-button" aria-label="Share">
								↗
							</button>
						</div>
					</div>

					<div className="editor-canvas">
						<section className="code-pane" aria-label="Code editor">
							<div className="code-tabbar">
								<div className="code-tab active">index.html ×</div>
							</div>

							<div className="code-editor">
								{codeLines.map((line, index) => (
									<div key={`${index}-${line}`} className="code-line">
										<span className="line-number">{index + 1}</span>
										<span className="line-content">{line || '\u00A0'}</span>
									</div>
								))}
							</div>

							<div className="code-snippet">
								<div className="snippet-frame">
									<div className="snippet-badge">&lt;style&gt;</div>
									<pre>
										{`.hero-section {
	background: var(--surface);
	padding: 40px;
	border-radius: 8px;
}`}
									</pre>
									<div className="snippet-badge bottom">&lt;/style&gt;</div>
								</div>
							</div>
						</section>

						<aside className="preview-pane" aria-label="Live preview">
							<div className="preview-window">
								<div className="window-chrome">
									<span />
									<span />
									<span />
								</div>

								<div className="preview-art">
									<div className="preview-copy">
										<h1>Building the Future</h1>
										<p>Crafting digital experiences with surgical precision and modern engineering principles.</p>
										<button type="button">Get Started</button>
									</div>
								</div>
							</div>

							<div className="preview-stats">
								{previewStats.map((stat) => (
									<div key={stat.label} className="stat-card">
										<span>{stat.label}</span>
										<strong className={stat.valueClass || ''}>{stat.value}</strong>
									</div>
								))}
							</div>
						</aside>
					</div>

					<footer className="editor-statusbar">
						<div className="status-chip success">Synced</div>
						<div className="status-chip">main*</div>
						<div className="status-chip muted">Spaces: 2</div>
						<div className="status-chip muted">UTF-8</div>
						<div className="status-chip muted">Ln 12, Col 44</div>
					</footer>
				</main>
			</div>
		</div>
	);
}

export default Editor;
