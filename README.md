# Pipeline CI/CD con Render y GitHub Actions

## Descripción
Este proyecto implementa un pipeline CI/CD completo para una aplicación Node.js usando GitHub Actions y Render.

## Flujo del pipeline
1. El desarrollador hace commit o pull request a la rama main.
2. GitHub Actions ejecuta automáticamente los tests unitarios e integración.
3. Si los tests fallan, el pipeline se detiene y no se despliega.
4. Si los tests pasan, Render detecta el push y despliega la aplicación automáticamente.
5. Render mantiene la versión estable activa si un despliegue falla.
6. En caso de error, se puede ejecutar un rollback manual desde el panel de Render.

## Tests
- Framework: Jest + Supertest
- Tests unitarios y de integración HTTP
- Ejecutados en CI antes del despliegue

## Gestión de fallos y rollback
- Fallos de runtime detectados por Render
- La versión defectuosa no sustituye la estable
- Rollback manual probado y documentado

## Entornos
- Local: desarrollo y ejecución de tests
- GitHub: control de versiones y CI
- Render: entorno de producción y despliegue

## Evidencia de despliegue
Cada despliegue en Render corresponde a un commit específico del repositorio, visible en los logs de Deploy.
