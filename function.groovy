#!/user/bin/env groovy

def imageBuild() {
    script {
        sh "docker build -t brightdevops/docker-artifact:web-1.0 ."
    }
}

def buildTest() {
    echo "running image test"
    sh "gradle test"
}

def deployBuild() {
    echo " deploying image to nexus repository"
    withCredentials ([
            usernamePassword (
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PWD'
            )
    ]) {
        sh "echo $PWD | docker login -u $USER --password-stdin"
        sh "docker push brightdevops/docker-artifact:web-1.0"
    }
}
return this