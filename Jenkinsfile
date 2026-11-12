
pipeline {
    agent any

    stages {

        stage('Check Environment') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Validate JavaScript') {
            steps {
                bat 'node --check index.js'
                bat 'node --check init.js'
            }
        }

        stage('Build Complete') {
            steps {
                echo 'Application validation completed successfully!'
            }
        }
    }
}
