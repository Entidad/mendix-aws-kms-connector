# Maven Installation Script for Windows
Write-Host "=== Maven Installation Script ===" -ForegroundColor Green

$MavenVersion = "3.9.6"
$DownloadUrl = "https://archive.apache.org/dist/maven/maven-3/$MavenVersion/binaries/apache-maven-$MavenVersion-bin.zip"
$DownloadPath = "$env:USERPROFILE\Downloads\apache-maven-$MavenVersion-bin.zip"
$ExtractPath = "$env:USERPROFILE\maven"
$MavenHome = "$ExtractPath\apache-maven-$MavenVersion"

Write-Host "`nStep 1: Creating directory structure..."
if (-not (Test-Path $ExtractPath)) {
    New-Item -ItemType Directory -Path $ExtractPath -Force | Out-Null
    Write-Host "Created: $ExtractPath"
} else {
    Write-Host "Directory already exists: $ExtractPath"
}

Write-Host "`nStep 2: Downloading Maven $MavenVersion..."
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor [System.Net.SecurityProtocolType]::Tls12
try {
    $webClient = New-Object System.Net.WebClient
    $webClient.DownloadFile($DownloadUrl, $DownloadPath)
    Write-Host "Download complete!" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Failed to download Maven" -ForegroundColor Red
    exit 1
}

Write-Host "`nStep 3: Extracting Maven..."
try {
    Expand-Archive -Path $DownloadPath -DestinationPath $ExtractPath -Force
    Write-Host "Extraction complete!" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Failed to extract Maven" -ForegroundColor Red
    exit 1
}

Write-Host "`nStep 4: Configuring environment..."
$env:PATH = "$MavenHome\bin;$env:PATH"
$env:MAVEN_HOME = $MavenHome

Write-Host "`nStep 5: Verifying installation..."
& "$MavenHome\bin\mvn" --version

if ($?) {
    Write-Host "`n SUCCESS: Maven installed successfully!" -ForegroundColor Green
} else {
    Write-Host "`n ERROR: Maven installation verification failed" -ForegroundColor Red
    exit 1
}

Write-Host "`nCleaning up..."
if (Test-Path $DownloadPath) {
    Remove-Item $DownloadPath
    Write-Host "Removed download file"
}

Write-Host "`nCompleted!" -ForegroundColor Green
