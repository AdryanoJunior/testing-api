pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/AdryanoJunior/testing-api.git'
            }
        }
         stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
         stage('Run Tests') {
            steps {
                  sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}
