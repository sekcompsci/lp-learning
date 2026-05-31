const LESSONS = [
  { file: "01-go-for-js-devs.html",       title: "Go for JS Developers",    group: "foundation" },
  { file: "02-core-language.html",          title: "Core Language",            group: "foundation" },
  { file: "03-error-handling.html",         title: "Error Handling",           group: "foundation" },
  { file: "04-best-practices.html",         title: "Best Practices",           group: "craft"      },
  { file: "05-anti-patterns.html",          title: "Anti-Patterns",            group: "craft"      },
  { file: "06-concurrency.html",             title: "Concurrency",              group: "craft"      },
  { file: "07-file-structure.html",         title: "File Structure",           group: "project"    },
  { file: "08-libraries-integrations.html", title: "Libraries & Integrations", group: "project"    },
  { file: "09-project-standards.html",      title: "Project Standards",        group: "project"    },
  { file: "10-life-cycle.html",             title: "Life Cycle",               group: "project"    },
  { file: "11-dev-environment.html",        title: "Dev Environment",          group: "project"    },
  { file: "12-testing.html",                title: "Testing",                  group: "project"    },
  { file: "13-build-deploy.html",           title: "Build & Deploy",           group: "project"    },
  { file: "14-cdc.html",                    title: "Change Data Capture",      group: "project"    },
];

const GROUPS = [
  { key: "foundation", label: "Foundation" },
  { key: "craft",      label: "Craft"      },
  { key: "project",    label: "Project"    },
];

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("lesson-nav");
  if (!nav) return;

  const currentFile = window.location.pathname.split("/").pop();
  const idx = LESSONS.findIndex(l => l.file === currentFile);

  const prev = idx > 0 ? LESSONS[idx - 1] : null;
  const next = idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null;

  // Build sidebar
  const sidebar = document.createElement("aside");
  sidebar.id = "lesson-sidebar";
  sidebar.setAttribute("aria-label", "Lesson navigation");

  GROUPS.forEach(({ key, label }) => {
    const groupLessons = LESSONS.filter(l => l.group === key);
    const section = document.createElement("div");
    section.className = `sidebar-group sidebar-group--${key}`;

    const heading = document.createElement("div");
    heading.className = "sidebar-group__label";
    heading.textContent = label;
    section.appendChild(heading);

    groupLessons.forEach(lesson => {
      const a = document.createElement("a");
      a.href = lesson.file;
      a.className = "sidebar-lesson" + (lesson.file === currentFile ? " active" : "");
      a.textContent = lesson.title;
      section.appendChild(a);
    });

    sidebar.appendChild(section);
  });

  // Wrap sidebar + main in .page-layout
  const main = document.querySelector("main.lesson-page");
  const layout = document.createElement("div");
  layout.className = "page-layout";
  main.parentNode.insertBefore(layout, main);
  layout.appendChild(sidebar);
  layout.appendChild(main);

  // Overlay for mobile
  const overlay = document.createElement("div");
  overlay.id = "sidebar-overlay";
  document.body.appendChild(overlay);

  // Inject nav with hamburger
  nav.innerHTML = `
    <div class="nav-inner">
      <button class="hamburger" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <a href="../index.html" class="nav-back">← All Modules</a>
      <div class="nav-steps">
        ${prev ? `<a href="${prev.file}" class="nav-prev">← ${prev.title}</a>` : "<span></span>"}
        ${next ? `<a href="${next.file}" class="nav-next">${next.title} →</a>` : "<span></span>"}
      </div>
    </div>
  `;

  // Mobile toggle
  const hamburger = nav.querySelector(".hamburger");

  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }

  hamburger.addEventListener("click", () =>
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar()
  );
  overlay.addEventListener("click", closeSidebar);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeSidebar(); });
  sidebar.querySelectorAll("a.sidebar-lesson").forEach(a =>
    a.addEventListener("click", () => { if (window.innerWidth < 900) closeSidebar(); })
  );
});
