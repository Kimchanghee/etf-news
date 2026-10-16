$ErrorActionPreference='Stop'
Set-Location $PSScriptRoot\..
pnpm refresh
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
pnpm build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
pnpm gate
exit $LASTEXITCODE
