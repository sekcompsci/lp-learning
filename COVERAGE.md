# Coverage Index

When you add a library, change a standard, or modify a file listed below — update the corresponding lesson.

| Lesson | Repo files / concepts tracked |
|--------|-------------------------------|
| 06 File Structure | `internal/`, `pkg/`, `config/`, `database/` directory layout of both repos |
| 09 Libraries & Integrations | `go.mod` deps, `pkg/retryer/`, `pkg/ratelimit/`, `database/`, `internal/clients/` |
| 10 Project Standards | `internal/handlers/`, `internal/services/`, `internal/repository/interfaces.go`, `internal/routes/routes.go` |
| 11 Life Cycle | `main.go`, `internal/routes/routes.go`, `internal/middleware/` |
| 12 Dev Environment | `Makefile`, `docker-compose.yml`, `.env.example` |
| 13 Testing | `internal/services/*_test.go`, `tests/` |
| 14 Build & Deploy | `Dockerfile`, `.gitlab-ci.yml` |
| 15 CDC | Kafka JDBC sink connector config, `internal/clients/kafka*.go` |

## How to use

1. You changed or added something in the "Repo files" column
2. Find the matching lesson row
3. Open `lessons/NN-*.html` and update the affected section
4. Commit the update to this repo
