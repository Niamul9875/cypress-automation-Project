pipeline {
  agent any

  tools {
    nodejs 'Node 22.12.0'
  }

  environment {
    RCLONE_PATH = 'C:\\rclone\\rclone\\rclone.exe'
    REMOTE_FOLDER = 'gdrive:/BUltimus/'
    BUILD_FOLDER = "Build_${BUILD_NUMBER}"
    VIDEO_DIR = "${env.WORKSPACE}\\cypress\\videos"
    EMAIL_TO = 'niamul.islam@leads-bd.com'
    EMAIL_FROM = 'missiononemtwo@gmail.com'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/avisheak/BankUltimus_Automation.git'
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
            // define which spec to run
            //env.SPEC_FILE = "cypress/e2e/Deposit/DemandDeposit.cy.js"
            // env.SPEC_FILE = "cypress/e2e/Deposit/DemandDepositCashTrans.cyjs"
             env.SPEC_FILE = "cypress/e2e/Deposit/TimeDeposit.cy.js"
            // env.SPEC_FILE = "cypress/e2e/Deposit/TimeDepositCashTrans.cy.js"
            // env.SPEC_FILE = "cypress/e2e/Deposit/TimeDeposit.cy.js"
             //env.SPEC_FILE = "cypress/e2e/Deposit/SchemeDeposit.cy.js"
            // env.SPEC_FILE = "cypress/e2e/Deposit/SchemeDepositCashTrans.cy.js"
            // run Cypress
            bat "npx cypress run --spec \"${env.SPEC_FILE}\""

           

          }
        }
      }
    }

    stage('Upload Videos to Google Drive') {
      steps {
        script {
          // Extract only the spec filename without path
          def specName = env.SPEC_FILE.tokenize('/\\').last()      // DemandDeposit.cy.js
          def videoFileName = "${specName}.mp4"                    // DemandDeposit.cy.js.mp4
          def videoFile = "${env.VIDEO_DIR}\\${videoFileName}"
          def remoteFile = "${env.REMOTE_FOLDER}${env.BUILD_FOLDER}/videos/${videoFileName}"

          bat "dir \"${env.VIDEO_DIR}\""
          bat "\"${env.RCLONE_PATH}\" copyto \"${videoFile}\" \"${remoteFile}\""

        }
      }
    }
//-------------------------Run Cypress Dynamically-------------------------------------------------------
// stage('Run Cypress Tests and Upload Videos') {
//   steps {
//     script {
//       catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
//         def specFiles = [
//           "cypress/e2e/Deposit/DemandDeposit.cy.js",
//           "cypress/e2e/Deposit/DemandDepositCashTrans.cy.js",
//           "cypress/e2e/Deposit/TimeDeposit.cy.js",
//           "cypress/e2e/Deposit/TimeDepositCashTrans.cy.js",
//           "cypress/e2e/Deposit/SchemeDeposit.cy.js",
//           "cypress/e2e/Deposit/SchemeDepositCashTrans.cy.js"
//         ]

//         specFiles.each { spec ->
//           // Run Cypress test
//           bat "npx cypress run --spec \"${spec}\""

//           // Extract spec name only (without path)
//           def specName = spec.tokenize('/\\').last()        // DemandDeposit.cy.js
//           def videoFileName = "${specName}.mp4"             // DemandDeposit.cy.js.mp4
//           def videoFile = "${env.VIDEO_DIR}\\${videoFileName}"
//           def remoteFile = "${env.REMOTE_FOLDER}${env.BUILD_FOLDER}/videos/${videoFileName}"

//           // Debug: list videos
//           bat "dir \"${env.VIDEO_DIR}\""

//           // Upload video to Google Drive
//           bat "\"${env.RCLONE_PATH}\" copyto \"${videoFile}\" \"${remoteFile}\""
//         }
//       }
//     }
//   }
// }

//--------------------------------------------------------------------------------------------------
    stage('Get Shareable Links') {
      steps {
        script {
          def output = bat(script: "\"${env.RCLONE_PATH}\" link ${env.REMOTE_FOLDER}${env.BUILD_FOLDER}/", returnStdout: true)
          def match = output.readLines().find { it.startsWith("https://") }
          echo "Build Folder Google Drive Link: ${match}"
          env.BUILD_FOLDER_LINK = match ?: "Not Found"
        }
      }
    }
  }

  post {
HEAD
  always {
    script {
      // Extract only the spec filename (e.g. DemandDeposit.cy.js)
      def specName = env.SPEC_FILE?.tokenize('/\\')?.last() ?: "Unknown_Spec"

      def emailBody = 
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color:#2E86C1;">✅ Cypress Test Report</h2>
            <p>Hello Team,</p>
            <p>The Cypress test run has completed. Below are the details:</p>
            <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
              <tr>
                <th align="left">Spec File</th>
                <td>${specName}</td>
              </tr>
              <tr>
                <th align="left">Status</th>
                <td><b>${currentBuild.currentResult}</b></td>
              </tr>
              <tr>
                <th align="left">Google Drive Folder</th>
                <td><a href="${env.BUILD_FOLDER_LINK}">Open CypressReports/Build_${env.BUILD_NUMBER}</a></td>
              </tr>
              <tr>
                <th align="left">Jenkins Build URL</th>
                <td><a href="${env.BUILD_URL}">${env.BUILD_URL}</a></td>
              </tr>
            </table>
            <br/>
            <p style="color:#555;">Regards,<br><b>Automation Team</b></p>
          </body>
        </html>
    

      emailext(
        subject: "✅ Cypress Report - Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
        body: emailBody,
        to: "${env.EMAIL_TO}",
        from: "${env.EMAIL_FROM}",
        mimeType: 'text/html'
      )

    always {
      script {
        // Extract  only the spec filename (e.g. DemandDeposit.cy.js)
        def specName = env.SPEC_FILE?.tokenize('/\\')?.last() ?: "Unknown_Spec"
        emailext(
          subject: "✅ Cypress Report - Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
          body: """
            <p>Hello,</p>
            <p>The Cypress test <b>${specName}</b> has completed.</p>
            <ul>
              <li><b>Status:</b> ${currentBuild.currentResult}</li>
              <li><b>Google Drive Folder:</b> <a href="${env.BUILD_FOLDER_LINK}">Open CypressReports/Build_${env.BUILD_NUMBER}</a></li>
              <li><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></li>
            </ul>
            <p>Regards,<br>...</p>
          """,
          to: "${env.EMAIL_TO}",
          from: "${env.EMAIL_FROM}",
          mimeType: 'text/html'
        )
      }
      echo 'Cleaning up...'
    }
    echo 'Cleaning up...'
  }
}

}
