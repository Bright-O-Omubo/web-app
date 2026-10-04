def gv

pipeline {
    agent any
    tools {
        gradle "Gradle 9.9.0-milestone-1"
    }
    parameters{
        choice(name:"dev_env", choices:["1.0","2.0","3.0"], description: "deploy environment choice")
        booleanParam(name:"build_feed", defaultValue: "true", description: "")
    }
    stages {
        stage("init") {

             steps {

                  script {

                     gv = load "function.groovy"
                  }
             }
        }

        stage("image build") {

            steps {

                script {

                    gv.imageBuild()
                }
            }
        }
        stage("test") {

            when {

                expression {

                    params.build_feed == true
                }
            }
            steps{
                script {

                  gv.buildTest()
                }
            }
        }
        stage("deploy") {

            steps {

                script {

                    gv.deployBuild()
                }
            }
        }
    }
}