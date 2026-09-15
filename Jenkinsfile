pipeline {
    agent any
    parameters{
        choice(name:"dev_env", choices:["1.0","2.0","3.0"], description: "deploy environment choice")
        booleanParam(name:"build_feed", defaultValue: "true", description: "")
    }
    stages {

        stage("image build") {

            steps {

                script {

                    sh "docker build -t 102.90.96.171:8083/formular-web:${params.dev_env} ."
                }
            }
        }
        stage("test") {

            when {

                expression {

                    params.build_feed
                }
            }
            steps{
                script {

                    echo "running test for docker image 102.90.96.171:8083/formular-web:${params.dev_env}"
                }
            }
        }
        stage("deploy") {

            steps {

                script {

                    withCredentials ([
                        usernamePassword (
                            credentialsId: "nexus-docker-creds",
                            usernameVariable: 'USR',
                            passwordVariable: 'PWD'
                        )
                    ]) {
                         echo "deploying artifact to repo environment"
                         sh "echo $PWD | docker login localhost:8083 -u $USR --password-stdin"
                         sh "docker push 102.90.96.171:8083/formular-web:${params.dev_env}"
                    }
                }
            }
        }
    }
}