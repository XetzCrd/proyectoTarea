@echo off
    set /p name=Enter User name: 
    set /p email=Enter User email: 
    set /p url=Enter Github URL: 

    git config --global user.name "%name%"
    git config --global user.name "%email%"
    git config --global -l

    git init
    git remote -v
    git remote add origin %url%
    git remote -v