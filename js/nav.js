const LESSONS = [
  { file: "01-go-for-js-devs.html",       title: "Go for JS Developers",    group: "foundation" },
  { file: "02-core-language.html",          title: "Core Language",            group: "foundation" },
  { file: "03-error-handling.html",         title: "Error Handling",           group: "foundation" },
  { file: "04-best-practices.html",         title: "Best Practices",           group: "craft"      },
  { file: "05-anti-patterns.html",          title: "Anti-Patterns",            group: "craft"      },
  { file: "06-file-structure.html",         title: "File Structure",           group: "project"    },
  { file: "07-libraries-integrations.html", title: "Libraries & Integrations", group: "project"    },
  { file: "08-project-standards.html",      title: "Project Standards",        group: "project"    },
  { file: "09-life-cycle.html",             title: "Life Cycle",               group: "project"    },
  { file: "10-dev-environment.html",        title: "Dev Environment",          group: "project"    },
  { file: "11-testing.html",                title: "Testing",                  group: "project"    },
  { file: "12-build-deploy.html",           title: "Build & Deploy",           group: "project"    },
  { file: "13-cdc.html",                    title: "Change Data Capture",      group: "project"    },
];

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("lesson-nav");
  if (!nav) return;

  const currentFile = window.location.pathname.split("/").pop();
  const idx = LESSONS.findIndex(l => l.file === currentFile);

  const prev = idx > 0 ? LESSONS[idx - 1] : null;
  const next = idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null;

  nav.innerHTML = `
    <div class="nav-inner">
      <a href="../index.html" class="nav-back">← All Modules</a>
      <div class="nav-steps">
        ${prev ? `<a href="${prev.file}" class="nav-prev">← ${prev.title}</a>` : "<span></span>"}
        ${next ? `<a href="${next.file}" class="nav-next">${next.title} →</a>` : "<span></span>"}
      </div>
    </div>
  `;
});
