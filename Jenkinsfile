pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World1231'
            }
        }
        stage('build') {
            steps {
                echo 'this is a build'
                echo "${env.JOB_DISPLAY_URL}"
                echo "${env.RUN_DISPLAY_URL}"
                echo "${env.JENKINS_URL}"
                echo "${env.BUILD_URL}"
                echo "${env.JOB_URL}"
                echo "${env.BUILD_TAG}"
           
                
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
            }
        }
      stage('sonarscan') {
             steps {
                 withSonarQubeEnv(installationName: 'sq') {
                   // bat 'sonar-scanner -D"sonar.organization=rapdevsonar" -D"sonar.projectKey=rapdevsonar_rapdev"  -D"sonar.sources=." -D"sonar.host.url=https://sonarcloud.io'
                      bat 'echo scanned'
                }
            }
        }
        stage("Quality Gate") {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails
                    // true = set pipeline to UNSTABLE, false = don't
                    waitForQualityGate abortPipeline: false
                }
            }
        }
        stage('change Control') {
            steps { 
                snDevOpsChange abortOnChangeCreationFailure: true, abortOnChangeStepTimeOut: true, changeCreationTimeOut: 240, changeRequestDetails: '{ "attributes": { "business_service":"d4e69e230a0a3c152e3a0cd4c1ef2107","cmdb_ci":"8aeb77d0472b4e508693a16f316d4348","assignment_group": "0a52d3dcd7011200f2d224837e6103f2"}, "setCloseCode": false, "autoCloseChange": true }', changeStepTimeOut: 3000, pollingInterval: 60
            }
        }
        stage('deploy') {
            steps { 
                echo 'going to deploy, pushed to prod'
                
            }
        }
    }
}
