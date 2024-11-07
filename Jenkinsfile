pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/AdryanoJunior/testing-api-cypress.git'
            }
        }
         stage('Install Dependencies') {
            steps {
              bat 'npm install'
            }
        }
         stage('Start Server') {
            steps {
               bat 'start /B npx serverest'
              sleep 5
            }
        }
         stage('Run Tests') {
            steps {
               bat 'npx cypress run'
            }
        }
    }
}
