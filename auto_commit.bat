@echo off
setlocal enabledelayedexpansion

:: get changed file path
for /f "tokens=2 delims= " %%A in ('git status --porcelain') do (
    set FILE=%%A
    goto :found
)
:found

:: exit if no changes
if "%FILE%"=="" exit /b

:: extract top-level folder name
for /f "tokens=1 delims=/" %%B in ("%FILE%") do set FOLDER=%%B

:: read counters
set /p DAY=<day_counter.txt
set /p COMMIT=<commit_counter.txt

:: get today date
for /f %%D in ('powershell -command "Get-Date -Format yyyy-MM-dd"') do set TODAY=%%D

:: get last commit date
for /f %%L in ('git log -1 --format^=%%cd --date^=short 2^>nul') do set LASTDAY=%%L

:: if new day → increase day counter AND reset commit counter
if not "%TODAY%"=="%LASTDAY%" (
    set /a DAY+=1
    echo %DAY%>day_counter.txt

    set COMMIT=0
    echo 0>commit_counter.txt
)

:: increase commit counter
set /a COMMIT+=1
echo %COMMIT%>commit_counter.txt

:: commit ONLY the active folder
git add "%FOLDER%"
git commit -m "Day %DAY% | Commit %COMMIT%"
git push
