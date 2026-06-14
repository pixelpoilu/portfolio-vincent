$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$dataPath = Join-Path $PSScriptRoot '..\src\data\project-prod.json'
$projects = Get-Content $dataPath -Raw | ConvertFrom-Json
$assetsRoot = Join-Path $PSScriptRoot '..\src\assets\images\projects'
$imageExts = @('.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tif', '.tiff')

$updated = 0
$skipped = 0
$missing = 0

foreach ($project in $projects) {
  $medias = @($project.medias)
  $updatedMedias = @()

  foreach ($media in $medias) {
    if ($null -eq $media) {
      $updatedMedias += $media
      continue
    }

    $fileName = $null
    if ($media -is [string]) {
      $fileName = $media.Trim()
    }
    elseif ($media.PSObject.Properties.Name -contains 'file' -and $media.file) {
      $fileName = [string]$media.file
    }

    if ([string]::IsNullOrWhiteSpace($fileName)) {
      $updatedMedias += $media
      continue
    }

    $ext = [System.IO.Path]::GetExtension($fileName)
    if ($imageExts -notcontains $ext.ToLowerInvariant()) {
      $updatedMedias += $media
      $skipped++
      continue
    }

    $fullPath = Join-Path $assetsRoot ([System.IO.Path]::Combine([string]$project.mediapath, $fileName))
    if (-not (Test-Path $fullPath)) {
      $updatedMedias += $media
      $missing++
      continue
    }

    try {
      $image = [System.Drawing.Image]::FromFile($fullPath)
      $width = [string]$image.Width
      $height = [string]$image.Height
      $image.Dispose()

      if ($media -is [string]) {
        $updatedMedias += [PSCustomObject]@{ file = $fileName; width = $width; height = $height }
      }
      else {
        $obj = [ordered]@{}
        foreach ($property in $media.PSObject.Properties) {
          $obj[$property.Name] = $property.Value
        }
        $obj['width'] = $width
        $obj['height'] = $height
        $updatedMedias += [pscustomobject]$obj
      }

      $updated++
    }
    catch {
      $updatedMedias += $media
      $skipped++
    }
  }

  $project.medias = $updatedMedias
}

$projects | ConvertTo-Json -Depth 100 | Set-Content $dataPath -Encoding UTF8
Write-Output "updated=$updated skipped=$skipped missing=$missing"
