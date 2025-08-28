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
stage('Run Cypress Tests and Upload Videos') {
  steps {
    script {
      catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
        def specFiles = [
          "cypress/e2e/Deposit/DemandDeposit.cy.js",
          "cypress/e2e/Deposit/DemandDepositCashTrans.cy.js",
          "cypress/e2e/Deposit/TimeDeposit.cy.js",
          "cypress/e2e/Deposit/TimeDepositCashTrans.cy.js",
          "cypress/e2e/Deposit/SchemeDeposit.cy.js",
          "cypress/e2e/Deposit/SchemeDepositCashTrans.cy.js"
        ]

        specFiles.each { spec ->
          // Run Cypress test
          bat "npx cypress run --spec \"${spec}\""

          // Extract spec name only (without path)
          def specName = spec.tokenize('/\\').last()        // DemandDeposit.cy.js
          def videoFileName = "${specName}.mp4"             // DemandDeposit.cy.js.mp4
          def videoFile = "${env.VIDEO_DIR}\\${videoFileName}"
          def remoteFile = "${env.REMOTE_FOLDER}${env.BUILD_FOLDER}/videos/${videoFileName}"

          // Debug: list videos
          bat "dir \"${env.VIDEO_DIR}\""

          // Upload video to Google Drive
          bat "\"${env.RCLONE_PATH}\" copyto \"${videoFile}\" \"${remoteFile}\""
        }
      }
    }
  }
}  


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
            <p>Regards,<br>Md Shafique</p>
          """,
          to: "${env.EMAIL_TO}",
          from: "${env.EMAIL_FROM}",
          mimeType: 'text/html'
        )
      }
      echo 'Cleaning up...'
    }
  }
}
