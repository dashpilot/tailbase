# Tailbase

**Modern CSS framework combining Bootstrap's components with Tailwind's utility-first approach**

Tailbase gives you the best of both worlds: the familiar component names and structure of Bootstrap with the modern design aesthetic and utility classes of Tailwind CSS. No learning curve for Bootstrap developers, but with a fresh, contemporary look.

## 🚀 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>My App</title>
		<link rel="stylesheet" href="tailbase.css" />
	</head>
	<body>
		<div class="container">
			<h1 class="text-primary">Hello Tailbase!</h1>
			<button class="btn btn-primary">Get Started</button>
		</div>

		<!-- For interactive components -->
		<script src="tailbase.js"></script>
	</body>
</html>
```

## ✨ Key Features

- **Bootstrap naming** - Use familiar classes like `.btn`, `.card`, `.container`
- **Tailwind aesthetics** - Modern colors, spacing, and typography
- **Complete grid system** - Bootstrap 5 responsive grid with all breakpoints
- **Comprehensive utilities** - Margin, padding, flexbox, sizing, and more
- **Interactive components** - Carousel, modal, tabs with auto-initialization
- **Zero dependencies** - Pure CSS and vanilla JavaScript

## 🎨 What Makes Tailbase Different

| Feature               | Bootstrap | Tailwind      | Tailbase          |
| --------------------- | --------- | ------------- | ----------------- |
| **Learning Curve**    | Low       | High          | **None**          |
| **Design Quality**    | Dated     | Modern        | **Modern**        |
| **Component Library** | Yes       | No            | **Yes**           |
| **Utility Classes**   | Basic     | Comprehensive | **Comprehensive** |
| **File Size**         | Large     | Variable      | **Optimized**     |

## 📦 What's Included

- `tailbase.css` - Complete CSS framework (41KB)
- `tailbase.js` - Interactive components (6KB)
- `index.html` - Live documentation and examples
- Full source code and examples

## 🔧 Components

### Layout

- **Grid System** - Bootstrap 5 grid with containers, rows, and columns
- **Flexbox utilities** - Direction, wrapping, alignment, and sizing

### Components

- **Buttons** - Primary, secondary, success, warning, danger, dark variants
- **Cards** - Headers, bodies, footers with hover effects
- **Forms** - Inputs, selects, checkboxes, radios with validation styles
- **Navigation** - Navbar, breadcrumbs, pagination, tabs
- **Feedback** - Alerts, badges, progress bars
- **Interactive** - Modals, carousels, collapsible content

### Utilities

- **Spacing** - Margin and padding (mt-1 through mt-5, etc.)
- **Typography** - Font weights, sizes, colors, alignment
- **Colors** - Background and text colors for all variants
- **Borders** - Border styles, colors, and radius
- **Sizing** - Width and height percentages
- **Position** - Static, relative, absolute, fixed, sticky

## 🎯 Example Usage

### Basic Layout

```html
<div class="container">
	<div class="row">
		<div class="col-md-8">
			<h1 class="mb-4">Main Content</h1>
			<p class="text-muted">Your content here...</p>
		</div>
		<div class="col-md-4">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">Sidebar</h5>
					<p class="card-text">Additional info...</p>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Interactive Components

```html
<!-- Modal -->
<button class="btn btn-primary" onclick="openModal('myModal')">Open Modal</button>
<div class="modal" id="myModal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Modal Title</h5>
				<button class="btn-close" onclick="closeModal('myModal')"></button>
			</div>
			<div class="modal-body">Modal content goes here...</div>
		</div>
	</div>
</div>

<!-- Carousel -->
<div class="carousel" data-autoplay="true">
	<div class="carousel-inner">
		<div class="carousel-item active">
			<img src="image1.jpg" alt="Slide 1" />
		</div>
		<div class="carousel-item">
			<img src="image2.jpg" alt="Slide 2" />
		</div>
	</div>
	<button class="carousel-control-prev">Previous</button>
	<button class="carousel-control-next">Next</button>
</div>
```

### Utility Classes

```html
<!-- Spacing and layout -->
<div class="d-flex justify-content-between align-items-center p-4 mb-3">
	<h2 class="text-primary mb-0">Title</h2>
	<button class="btn btn-outline-primary btn-sm">Action</button>
</div>

<!-- Responsive design -->
<div class="row">
	<div class="col-12 col-md-6 col-lg-4 mb-3">
		<div class="card h-100">
			<div class="card-body d-flex flex-column">
				<h5 class="card-title">Card Title</h5>
				<p class="card-text flex-grow-1">Content...</p>
				<button class="btn btn-primary mt-auto">Action</button>
			</div>
		</div>
	</div>
</div>
```

## 🎨 Color System

Tailbase uses a carefully crafted color palette:

```css
--primary: #3b82f6; /* Blue */
--success: #10b981; /* Green */
--warning: #f59e0b; /* Amber */
--danger: #ef4444; /* Red */
--info: #06b6d4; /* Cyan */
--dark: #1a1a1a; /* Near Black */
```

## 📱 Responsive Design

Mobile-first responsive design with Bootstrap's breakpoint system:

- `xs` - Extra small devices (default)
- `sm` - Small devices (≥576px)
- `md` - Medium devices (≥768px)
- `lg` - Large devices (≥992px)
- `xl` - Extra large devices (≥1200px)

## 🔧 Customization

Easily customize colors and spacing by modifying CSS custom properties:

```css
:root {
	--primary: #your-brand-color;
	--spacing-4: 1.5rem; /* Adjust base spacing */
	--radius: 0.75rem; /* Adjust border radius */
}
```

## 📖 Documentation

Open `index.html` in your browser to see the complete documentation with live examples of every component and utility class.

## 🤝 Why Choose Tailbase?

1. **Familiar** - If you know Bootstrap, you already know Tailbase
2. **Modern** - Contemporary design that doesn't look dated
3. **Complete** - Full component library + utility classes
4. **Flexible** - Use components for speed, utilities for customization
5. **Lightweight** - Optimized CSS with no unused styles
6. **Compatible** - Drop-in replacement for many Bootstrap use cases

## 📄 License

Open source and free to use in any project.

---

**Get started in seconds. Build beautiful interfaces in minutes.**
