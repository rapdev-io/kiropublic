pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('build') {
            steps {
                echo 'this is a build'
            }
        }
      /*  stage('test') {
             steps {
                    junit 'Junit*.xml'
            }
        }
    */
        stage('test2') {
             steps {
                    sh returnStdout: true, 'pwd'
                    xunit checksName: '', tools: [JUnit(excludesPattern: '', pattern: 'Junit*.xml', skipNoTestFiles: true, stopProcessingIfError: false)]
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
