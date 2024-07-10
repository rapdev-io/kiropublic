pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World1'
            }
        }
        stage('build') {
            steps {
                echo 'this is a build'
            }
        }
        stage('test') {
             steps {
                    junit 'Junit*.xml'
            }
        }
        stage('test2') {
             steps {
                    bat 'copy /b Junit*.xml +,,'
                    xunit checksName: '', tools: [JUnit(excludesPattern: '', pattern: 'Junit*.xml', skipNoTestFiles: true, stopProcessingIfError: false)]
                 https://3af64214e6a0a903cf4521eTDH04b2d466ea873c54a/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-windows.zip?_gl=1*10c429r*_gcl_au*MTU0NjI4NTM1MC4xNzIwNjEyMjI5*_ga*MTg3OTIwODQ5Ny4xNzIwNjEyMjI5*_ga_9JZ0GZ5TC6*MTcyMDYxMjIyOS4xLjEuMTcyMDYxNjM3OC42MC4wLjA.
            }
        }
        stage('sonarscan') {
             steps {
                 withSonarQubeEnv(installationName: 'sq') {
                    bat "sonar-scanner"
                }
            }
        }
        
        stage('change Control') {
            steps { 
                snDevOpsChange abortOnChangeCreationFailure: true, abortOnChangeStepTimeOut: true, changeCreationTimeOut: 240, changeRequestDetails: '{ "attributes": { "short_description": "Test description", "priority": "1", "start_date": "2021-02-05 08:00:00", "end_date": "2022-04-05 08:00:00", "justification": "test justification", "description": "test description", "cab_required": true, "comments": "This update for work notes is from jenkins file", "work_notes": "test work notes", "assignment_group": "a715cd759f2002002920bde8132e7018" }, "setCloseCode": false, "autoCloseChange": true }', changeStepTimeOut: 300, pollingInterval: 60
            }
        }
        stage('deploy') {
            steps { 
                echo 'going to deploy, pushed to prod'
                
            }
        }
    }
}
