pipeline {
  agent any

  tools {
    nodejs 'Node 22.12.0'
  }

  environment {
    RCLONE_PATH   = 'C:\\rclone\\rclone\\rclone.exe'
    REMOTE_FOLDER = 'gdrive:/BUltimus/'
    BUILD_FOLDER  = "Build_${BUILD_NUMBER}"
    VIDEO_DIR     = "${env.WORKSPACE}\\cypress\\videos"
    EMAIL_TO      = 'aminur.rashid@leads-bd.com' 
    EMAIL_FROM    = 'missiononemtwo@gmail.com'
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/avisheak/BankUltimus_Automation.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
        bat 'npx cypress install'
      }
    }

    stage('Run Cypress Test') {
      steps {
        script {
          catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
            env.SPEC_FILE = 'cypress/e2e/Financial/Finance_Purpose.cy.js'
            bat "npx cypress run --spec \"${env.SPEC_FILE}\""
          }
        }
      }
    }

    stage('Upload Videos to Google Drive') {
      steps {
        script {
          def specName      = env.SPEC_FILE.tokenize('/\\').last()
          def videoFileName = "${specName}.mp4"
          def videoFile     = "${env.VIDEO_DIR}\\${videoFileName}"
          def remoteFile    = "${env.REMOTE_FOLDER}${env.BUILD_FOLDER}/BU_videos/${videoFileName}"

          bat "dir \"${env.VIDEO_DIR}\""
          bat "\"${env.RCLONE_PATH}\" copyto \"${videoFile}\" \"${remoteFile}\""
        }
      }
    }

    stage('Get Shareable Link') {
      steps {
        script {
          def output = bat(
            script: "\"${env.RCLONE_PATH}\" link ${env.REMOTE_FOLDER}${env.BUILD_FOLDER}/",
            returnStdout: true
          )

          def link = output.readLines().find { it.startsWith('https://') }
          env.BUILD_FOLDER_LINK = link ?: 'Not Found'

          echo "Google Drive Link: ${env.BUILD_FOLDER_LINK}"
        }
      }
    }
  }

  post {
    always {
      script {
        def specName = env.SPEC_FILE?.tokenize('/\\')?.last() ?: 'Unknown_Spec'

        def emailBody = """
        <html>
          <body style="font-family: Arial;">
            <h2>✅ Cypress Test Report</h2>
            <table border="1" cellpadding="6" cellspacing="0">
              <tr>
                <th align="left">Spec File</th>
                <td>${specName}</td>
              </tr>
              <tr>
                <th align="left">Status</th>
                <td><b>${currentBuild.currentResult}</b></td>
              </tr>
              <tr>
                <th align="left">Google Drive</th>
                <td>
                  <a href="${env.BUILD_FOLDER_LINK}">
                    Open CypressReports/Build_${env.BUILD_NUMBER}
                  </a>
                </td>
              </tr>
              <tr>
                <th align="left">Jenkins URL</th>
                <td>
                  <a href="${env.BUILD_URL}">${env.BUILD_URL}</a>
                </td>
              </tr>
            </table>
            <br/>
            <p>Regards,<br><b>Automation Team</b></p>
          </body>
        </html>
        """

        emailext(
          subject: "✅ Cypress Report - Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
          body: emailBody,
          to: env.EMAIL_TO,
          from: env.EMAIL_FROM,
          mimeType: 'text/html'
        )
      }

      echo 'Pipeline finished.'
    }
  }
}