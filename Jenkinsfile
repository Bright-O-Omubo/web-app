pipeline {
    agent any
    tools {
        maven ""
    }
    parameters{
        version = choice(name:"dev_env", choices ["1.0","2.0","3.0"], description: "deploy environment choice")
        booleanParam(name:"build_feed", defaultValue: "true", description: "")
    }
    stages {

        stage("image build") {

            steps {

                script {

                    sh "docker build -t localhost:8083/formular-web:${version} ."
                }
            }
        }
        stage("test") {

            when {

                expression {

                    param.build_feed
                }
            }
            steps{
                script {

                    echo "running test for docker image{param.dev_env}"
                }
            }
        }
        stage("deploy") {

            steps {

                script {

                    withCredentials ([
                        usernamePassword (
                            credentialsId: "nexus_docker_creds"
                            usernameVariable: 'USR'
                            passwordVariable: 'PWD'
                        )
                    ]) {
                         echo "deploying artifact to repo environment"
                         sh "echo $PWD | docker login localhost:8083 -u $USR --password-stdin"
                         sh "docker push localhost:8083/formular-web:${version}"
                    }
                }
            }
        }
    }
}