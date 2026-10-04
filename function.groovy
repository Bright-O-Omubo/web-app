#!/user/bin/env groovy

def imageBuild() {
    script {
        sh "docker build -t F1-web/jma:1.9 ."
    }
}

def buildTest() {
    echo "running image test"
    sh "mvn test"
}

def deployBuild() {
    echo " deploying image to nexus repository"
    withCredentials ([
            usernamePassword (
                    credentialsId: "dockerhub-creds",
                    usernameVariable: USER,
                    passwordVariable: PWD
            )
    ]) {
        sh "echo $PWD | docker login -u $USER --password-stdin"
        sh "docker push F!-web/jma:1.9"
    }
}
return this