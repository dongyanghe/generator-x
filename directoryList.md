|-- undefined
    |-- .editorconfig
    |-- .eslintignore
    |-- .eslintrc.json
    |-- .gitattributes
    |-- .gitignore
    |-- .prettierignore
    |-- .prettierrc
    |-- .travis.yml
    |-- azure-pipelines.yml
    |-- CODE_OF_CONDUCT.md
    |-- CONTRIBUTING.md
    |-- Dockerfile
    |-- jsdoc-conf.json
    |-- LICENSE.txt
    |-- NOTICE
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- .gitee
    |   |-- ISSUE_TEMPLATE.zh-CN.md
    |   |-- PULL_REQUEST_TEMPLATE.zh-CN.md
    |-- .github
    |   |-- FUNDING.yml
    |   |-- ISSUE_TEMPLATE.md
    |   |-- PULL_REQUEST_TEMPLATE.md
    |   |-- ISSUE_TEMPLATE
    |   |   |-- BUG_REPORT.md
    |   |   |-- FEATURE_REQUEST.md
    |   |   |-- SPONSOR_THE_PROJECT.md
    |   |   |-- SUPPORT_QUESTION.md
    |   |-- MAINTAINERS_REPLY_TEMPLATES
    |       |-- BUILD_AS_MODULE.md
    |       |-- DONT_COMMENT_ON_OLD_ISSUE.md
    |       |-- GUIDELINES_NOT_FOLLOWED.md
    |       |-- README.md
    |       |-- USE_STACK_OVERFLOW.md
    |-- .vscode
    |   |-- launch.json
    |-- cli
    |   |-- cli.js
    |   |-- commands.js
    |   |-- completion.js
    |   |-- import-jdl.js
    |   |-- jhipster.js
    |   |-- run-yeoman-process.js
    |   |-- utils.js
    |   |-- wait-until.js
    |-- generators
    |   |-- cleanup.js
    |   |-- docker-base.js
    |   |-- docker-cli.js
    |   |-- docker-prompts.js
    |   |-- docker-utils.js
    |   |-- generator-base-blueprint.js
    |   |-- generator-base-docker.js
    |   |-- generator-base-private.js
    |   |-- generator-base.js
    |   |-- generator-constants.js
    |   |-- generator-transforms.js
    |   |-- kubernetes-base.js
    |   |-- needle-api.js
    |   |-- needle-base.js
    |   |-- statistics.js
    |   |-- utils.js
    |   |-- app
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |-- aws
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |   |-- lib
    |   |       |-- aws.js
    |   |       |-- eb.js
    |   |       |-- iam.js
    |   |       |-- rds.js
    |   |       |-- s3.js
    |   |-- aws-containers
    |   |   |-- aws-client.js
    |   |   |-- constants.js
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- README.md
    |   |   |-- USAGE
    |   |   |-- lib
    |   |   |   |-- cloudFormation.js
    |   |   |   |-- ecr.js
    |   |   |   |-- ssm.js
    |   |   |   |-- utils.js
    |   |   |-- templates
    |   |       |-- application.template.yml.ejs
    |   |       |-- AwsSSMConfiguration.java.ejs
    |   |       |-- base.template.yml.ejs
    |   |       |-- bootstrap-aws.yml.ejs
    |   |       |-- spring.factories.ejs
    |   |-- ci-cd
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- .gitlab-ci.yml.ejs
    |   |       |-- azure-pipelines.yml.ejs
    |   |       |-- circle.yml.ejs
    |   |       |-- docker-registry.yml.ejs
    |   |       |-- travis.yml.ejs
    |   |       |-- jenkins
    |   |           |-- idea.gdsl
    |   |           |-- jenkins.yml.ejs
    |   |           |-- Jenkinsfile.ejs
    |   |-- client
    |   |   |-- files-angular.js
    |   |   |-- files-react.js
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |   |-- needle-api
    |   |   |   |-- needle-client-angular.js
    |   |   |   |-- needle-client-i18n.js
    |   |   |   |-- needle-client-react.js
    |   |   |   |-- needle-client-webpack.js
    |   |   |   |-- needle-client.js
    |   |   |-- templates
    |   |       |-- angular
    |   |       |   |-- .eslintignore.ejs
    |   |       |   |-- .eslintrc.json.ejs
    |   |       |   |-- .huskyrc.ejs
    |   |       |   |-- .lintstagedrc.js.ejs
    |   |       |   |-- angular.json.ejs
    |   |       |   |-- package.json.ejs
    |   |       |   |-- postcss.config.js.ejs
    |   |       |   |-- proxy.conf.json.ejs
    |   |       |   |-- tsconfig-aot.json.ejs
    |   |       |   |-- tsconfig.e2e.json.ejs
    |   |       |   |-- tsconfig.json.ejs
    |   |       |   |-- tslint.json.ejs
    |   |       |   |-- src
    |   |       |   |   |-- main
    |   |       |   |   |   |-- webapp
    |   |       |   |   |       |-- 404.html.ejs
    |   |       |   |   |       |-- favicon.ico
    |   |       |   |   |       |-- index.html.ejs
    |   |       |   |   |       |-- manifest.webapp.ejs
    |   |       |   |   |       |-- robots.txt.ejs
    |   |       |   |   |       |-- app
    |   |       |   |   |       |   |-- app-routing.module.ts.ejs
    |   |       |   |   |       |   |-- app.constants.ts.ejs
    |   |       |   |   |       |   |-- app.main.ts.ejs
    |   |       |   |   |       |   |-- app.module.ts.ejs
    |   |       |   |   |       |   |-- polyfills.ts.ejs
    |   |       |   |   |       |   |-- vendor.ts.ejs
    |   |       |   |   |       |   |-- account
    |   |       |   |   |       |   |   |-- account.module.ts.ejs
    |   |       |   |   |       |   |   |-- account.route.ts.ejs
    |   |       |   |   |       |   |   |-- activate
    |   |       |   |   |       |   |   |   |-- activate.component.html.ejs
    |   |       |   |   |       |   |   |   |-- activate.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- activate.route.ts.ejs
    |   |       |   |   |       |   |   |   |-- activate.service.ts.ejs
    |   |       |   |   |       |   |   |-- password
    |   |       |   |   |       |   |   |   |-- password-strength-bar.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- password-strength-bar.scss.ejs
    |   |       |   |   |       |   |   |   |-- password.component.html.ejs
    |   |       |   |   |       |   |   |   |-- password.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- password.route.ts.ejs
    |   |       |   |   |       |   |   |   |-- password.service.ts.ejs
    |   |       |   |   |       |   |   |-- password-reset
    |   |       |   |   |       |   |   |   |-- finish
    |   |       |   |   |       |   |   |   |   |-- password-reset-finish.component.html.ejs
    |   |       |   |   |       |   |   |   |   |-- password-reset-finish.component.ts.ejs
    |   |       |   |   |       |   |   |   |   |-- password-reset-finish.route.ts.ejs
    |   |       |   |   |       |   |   |   |   |-- password-reset-finish.service.ts.ejs
    |   |       |   |   |       |   |   |   |-- init
    |   |       |   |   |       |   |   |       |-- password-reset-init.component.html.ejs
    |   |       |   |   |       |   |   |       |-- password-reset-init.component.ts.ejs
    |   |       |   |   |       |   |   |       |-- password-reset-init.route.ts.ejs
    |   |       |   |   |       |   |   |       |-- password-reset-init.service.ts.ejs
    |   |       |   |   |       |   |   |-- register
    |   |       |   |   |       |   |   |   |-- register.component.html.ejs
    |   |       |   |   |       |   |   |   |-- register.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- register.route.ts.ejs
    |   |       |   |   |       |   |   |   |-- register.service.ts.ejs
    |   |       |   |   |       |   |   |-- sessions
    |   |       |   |   |       |   |   |   |-- session.model.ts.ejs
    |   |       |   |   |       |   |   |   |-- sessions.component.html.ejs
    |   |       |   |   |       |   |   |   |-- sessions.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- sessions.route.ts.ejs
    |   |       |   |   |       |   |   |   |-- sessions.service.ts.ejs
    |   |       |   |   |       |   |   |-- settings
    |   |       |   |   |       |   |       |-- settings.component.html.ejs
    |   |       |   |   |       |   |       |-- settings.component.ts.ejs
    |   |       |   |   |       |   |       |-- settings.route.ts.ejs
    |   |       |   |   |       |   |-- admin
    |   |       |   |   |       |   |   |-- admin.module.ts.ejs
    |   |       |   |   |       |   |   |-- admin.route.ts.ejs
    |   |       |   |   |       |   |   |-- audits
    |   |       |   |   |       |   |   |   |-- audit-data.model.ts.ejs
    |   |       |   |   |       |   |   |   |-- audit.model.ts.ejs
    |   |       |   |   |       |   |   |   |-- audits.component.html.ejs
    |   |       |   |   |       |   |   |   |-- audits.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- audits.route.ts.ejs
    |   |       |   |   |       |   |   |   |-- audits.service.ts.ejs
    |   |       |   |   |       |   |   |-- configuration
    |   |       |   |   |       |   |   |   |-- configuration.component.html.ejs
    |   |       |   |   |       |   |   |   |-- configuration.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- configuration.route.ts.ejs
    |   |       |   |   |       |   |   |   |-- configuration.service.ts.ejs
    |   |       |   |   |       |   |   |-- docs
    |   |       |   |   |       |   |   |   |-- docs.component.html.ejs
    |   |       |   |   |       |   |   |   |-- docs.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- docs.route.ts.ejs
    |   |       |   |   |       |   |   |-- gateway
    |   |       |   |   |       |   |   |   |-- gateway-route.model.ts.ejs
    |   |       |   |   |       |   |   |   |-- gateway-routes.service.ts.ejs
    |   |       |   |   |       |   |   |   |-- gateway.component.html.ejs
    |   |       |   |   |       |   |   |   |-- gateway.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- gateway.route.ts.ejs
    |   |       |   |   |       |   |   |-- health
    |   |       |   |   |       |   |   |   |-- health-modal.component.html.ejs
    |   |       |   |   |       |   |   |   |-- health-modal.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- health.component.html.ejs
    |   |       |   |   |       |   |   |   |-- health.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- health.route.ts.ejs
    |   |       |   |   |       |   |   |   |-- health.service.ts.ejs
    |   |       |   |   |       |   |   |-- logs
    |   |       |   |   |       |   |   |   |-- log.model.ts.ejs
    |   |       |   |   |       |   |   |   |-- logs.component.html.ejs
    |   |       |   |   |       |   |   |   |-- logs.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- logs.route.ts.ejs
    |   |       |   |   |       |   |   |   |-- logs.service.ts.ejs
    |   |       |   |   |       |   |   |-- metrics
    |   |       |   |   |       |   |   |   |-- metrics.component.html.ejs
    |   |       |   |   |       |   |   |   |-- metrics.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- metrics.route.ts.ejs
    |   |       |   |   |       |   |   |   |-- metrics.service.ts.ejs
    |   |       |   |   |       |   |   |-- tracker
    |   |       |   |   |       |   |   |   |-- tracker.component.html.ejs
    |   |       |   |   |       |   |   |   |-- tracker.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- tracker.route.ts.ejs
    |   |       |   |   |       |   |   |-- user-management
    |   |       |   |   |       |   |       |-- user-management-delete-dialog.component.html.ejs
    |   |       |   |   |       |   |       |-- user-management-delete-dialog.component.ts.ejs
    |   |       |   |   |       |   |       |-- user-management-detail.component.html.ejs
    |   |       |   |   |       |   |       |-- user-management-detail.component.ts.ejs
    |   |       |   |   |       |   |       |-- user-management-update.component.html.ejs
    |   |       |   |   |       |   |       |-- user-management-update.component.ts.ejs
    |   |       |   |   |       |   |       |-- user-management.component.html.ejs
    |   |       |   |   |       |   |       |-- user-management.component.ts.ejs
    |   |       |   |   |       |   |       |-- user-management.route.ts.ejs
    |   |       |   |   |       |   |-- blocks
    |   |       |   |   |       |   |   |-- config
    |   |       |   |   |       |   |   |   |-- prod.config.ts.ejs
    |   |       |   |   |       |   |   |   |-- uib-pagination.config.ts.ejs
    |   |       |   |   |       |   |   |-- interceptor
    |   |       |   |   |       |   |       |-- auth-expired.interceptor.ts.ejs
    |   |       |   |   |       |   |       |-- auth.interceptor.ts.ejs
    |   |       |   |   |       |   |       |-- errorhandler.interceptor.ts.ejs
    |   |       |   |   |       |   |       |-- notification.interceptor.ts.ejs
    |   |       |   |   |       |   |-- core
    |   |       |   |   |       |   |   |-- core.module.ts.ejs
    |   |       |   |   |       |   |   |-- auth
    |   |       |   |   |       |   |   |   |-- account.service.ts.ejs
    |   |       |   |   |       |   |   |   |-- auth-jwt.service.ts.ejs
    |   |       |   |   |       |   |   |   |-- auth-session.service.ts.ejs
    |   |       |   |   |       |   |   |   |-- csrf.service.ts.ejs
    |   |       |   |   |       |   |   |   |-- state-storage.service.ts.ejs
    |   |       |   |   |       |   |   |   |-- user-route-access-service.ts.ejs
    |   |       |   |   |       |   |   |-- icons
    |   |       |   |   |       |   |   |   |-- font-awesome-icons.ts.ejs
    |   |       |   |   |       |   |   |-- language
    |   |       |   |   |       |   |   |   |-- language.constants.ts.ejs
    |   |       |   |   |       |   |   |   |-- language.helper.ts.ejs
    |   |       |   |   |       |   |   |-- login
    |   |       |   |   |       |   |   |   |-- login-modal.service.ts.ejs
    |   |       |   |   |       |   |   |   |-- login.service.ts.ejs
    |   |       |   |   |       |   |   |-- tracker
    |   |       |   |   |       |   |   |   |-- tracker.service.ts.ejs
    |   |       |   |   |       |   |   |-- user
    |   |       |   |   |       |   |       |-- account.model.ts.ejs
    |   |       |   |   |       |   |       |-- user.model.ts.ejs
    |   |       |   |   |       |   |       |-- user.service.ts.ejs
    |   |       |   |   |       |   |-- entities
    |   |       |   |   |       |   |   |-- entity.module.ts.ejs
    |   |       |   |   |       |   |-- home
    |   |       |   |   |       |   |   |-- home.component.html.ejs
    |   |       |   |   |       |   |   |-- home.component.ts.ejs
    |   |       |   |   |       |   |   |-- home.module.ts.ejs
    |   |       |   |   |       |   |   |-- home.route.ts.ejs
    |   |       |   |   |       |   |   |-- home.scss.ejs
    |   |       |   |   |       |   |-- layouts
    |   |       |   |   |       |   |   |-- error
    |   |       |   |   |       |   |   |   |-- error.component.html.ejs
    |   |       |   |   |       |   |   |   |-- error.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- error.route.ts.ejs
    |   |       |   |   |       |   |   |-- footer
    |   |       |   |   |       |   |   |   |-- footer.component.html.ejs
    |   |       |   |   |       |   |   |   |-- footer.component.ts.ejs
    |   |       |   |   |       |   |   |-- main
    |   |       |   |   |       |   |   |   |-- main.component.html.ejs
    |   |       |   |   |       |   |   |   |-- main.component.ts.ejs
    |   |       |   |   |       |   |   |-- navbar
    |   |       |   |   |       |   |   |   |-- active-menu.directive.ts.ejs
    |   |       |   |   |       |   |   |   |-- navbar.component.html.ejs
    |   |       |   |   |       |   |   |   |-- navbar.component.ts.ejs
    |   |       |   |   |       |   |   |   |-- navbar.route.ts.ejs
    |   |       |   |   |       |   |   |   |-- navbar.scss.ejs
    |   |       |   |   |       |   |   |-- profiles
    |   |       |   |   |       |   |       |-- page-ribbon.component.ts.ejs
    |   |       |   |   |       |   |       |-- page-ribbon.scss.ejs
    |   |       |   |   |       |   |       |-- profile-info.model.ts.ejs
    |   |       |   |   |       |   |       |-- profile.service.ts.ejs
    |   |       |   |   |       |   |-- shared
    |   |       |   |   |       |       |-- shared-libs.module.ts.ejs
    |   |       |   |   |       |       |-- shared.module.ts.ejs
    |   |       |   |   |       |       |-- alert
    |   |       |   |   |       |       |   |-- alert-error.component.ts.ejs
    |   |       |   |   |       |       |   |-- alert.component.ts.ejs
    |   |       |   |   |       |       |-- auth
    |   |       |   |   |       |       |   |-- has-any-authority.directive.ts.ejs
    |   |       |   |   |       |       |-- constants
    |   |       |   |   |       |       |   |-- error.constants.ts.ejs
    |   |       |   |   |       |       |   |-- i18n.constants.ts.ejs
    |   |       |   |   |       |       |   |-- input.constants.ts.ejs
    |   |       |   |   |       |       |   |-- pagination.constants.ts.ejs
    |   |       |   |   |       |       |-- language
    |   |       |   |   |       |       |   |-- find-language-from-key.pipe.ts.ejs
    |   |       |   |   |       |       |-- login
    |   |       |   |   |       |       |   |-- login.component.html.ejs
    |   |       |   |   |       |       |   |-- login.component.ts.ejs
    |   |       |   |   |       |       |-- util
    |   |       |   |   |       |           |-- datepicker-adapter.ts.ejs
    |   |       |   |   |       |           |-- request-util.ts.ejs
    |   |       |   |   |       |-- content
    |   |       |   |   |       |   |-- css
    |   |       |   |   |       |   |   |-- loading.css.ejs
    |   |       |   |   |       |   |-- images
    |   |       |   |   |       |   |   |-- hipster192.png
    |   |       |   |   |       |   |   |-- hipster256.png
    |   |       |   |   |       |   |   |-- hipster384.png
    |   |       |   |   |       |   |   |-- hipster512.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_0.svg
    |   |       |   |   |       |   |   |-- jhipster_family_member_0_head-192.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_0_head-256.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_0_head-384.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_0_head-512.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_1.svg
    |   |       |   |   |       |   |   |-- jhipster_family_member_1_head-192.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_1_head-256.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_1_head-384.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_1_head-512.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_2.svg
    |   |       |   |   |       |   |   |-- jhipster_family_member_2_head-192.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_2_head-256.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_2_head-384.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_2_head-512.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_3.svg
    |   |       |   |   |       |   |   |-- jhipster_family_member_3_head-192.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_3_head-256.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_3_head-384.png
    |   |       |   |   |       |   |   |-- jhipster_family_member_3_head-512.png
    |   |       |   |   |       |   |   |-- logo-jhipster.png
    |   |       |   |   |       |   |-- scss
    |   |       |   |   |       |       |-- global.scss.ejs
    |   |       |   |   |       |       |-- rtl.scss.ejs
    |   |       |   |   |       |       |-- vendor.scss.ejs
    |   |       |   |   |       |       |-- _bootstrap-variables.scss.ejs
    |   |       |   |   |       |-- swagger-ui
    |   |       |   |   |       |   |-- index.html.ejs
    |   |       |   |   |       |   |-- dist
    |   |       |   |   |       |       |-- images
    |   |       |   |   |       |           |-- throbber.gif
    |   |       |   |   |       |-- WEB-INF
    |   |       |   |   |           |-- web.xml.ejs
    |   |       |   |   |-- test
    |   |       |   |       |-- javascript
    |   |       |   |           |-- jest-global-mocks.ts.ejs
    |   |       |   |           |-- jest.conf.js.ejs
    |   |       |   |           |-- jest.ts.ejs
    |   |       |   |           |-- protractor.conf.js.ejs
    |   |       |   |           |-- e2e
    |   |       |   |           |   |-- account
    |   |       |   |           |   |   |-- account.spec.ts.ejs
    |   |       |   |           |   |-- admin
    |   |       |   |           |   |   |-- administration.spec.ts.ejs
    |   |       |   |           |   |-- page-objects
    |   |       |   |           |       |-- jhi-page-objects.ts.ejs
    |   |       |   |           |-- spec
    |   |       |   |               |-- test.module.ts.ejs
    |   |       |   |               |-- app
    |   |       |   |               |   |-- account
    |   |       |   |               |   |   |-- activate
    |   |       |   |               |   |   |   |-- activate.component.spec.ts.ejs
    |   |       |   |               |   |   |-- password
    |   |       |   |               |   |   |   |-- password-strength-bar.component.spec.ts.ejs
    |   |       |   |               |   |   |   |-- password.component.spec.ts.ejs
    |   |       |   |               |   |   |-- password-reset
    |   |       |   |               |   |   |   |-- finish
    |   |       |   |               |   |   |   |   |-- password-reset-finish.component.spec.ts.ejs
    |   |       |   |               |   |   |   |-- init
    |   |       |   |               |   |   |       |-- password-reset-init.component.spec.ts.ejs
    |   |       |   |               |   |   |-- register
    |   |       |   |               |   |   |   |-- register.component.spec.ts.ejs
    |   |       |   |               |   |   |-- sessions
    |   |       |   |               |   |   |   |-- sessions.component.spec.ts.ejs
    |   |       |   |               |   |   |-- settings
    |   |       |   |               |   |       |-- settings.component.spec.ts.ejs
    |   |       |   |               |   |-- admin
    |   |       |   |               |   |   |-- audits
    |   |       |   |               |   |   |   |-- audits.component.spec.ts.ejs
    |   |       |   |               |   |   |   |-- audits.service.spec.ts.ejs
    |   |       |   |               |   |   |-- configuration
    |   |       |   |               |   |   |   |-- configuration.component.spec.ts.ejs
    |   |       |   |               |   |   |   |-- configuration.service.spec.ts.ejs
    |   |       |   |               |   |   |-- health
    |   |       |   |               |   |   |   |-- health.component.spec.ts.ejs
    |   |       |   |               |   |   |-- logs
    |   |       |   |               |   |   |   |-- logs.component.spec.ts.ejs
    |   |       |   |               |   |   |   |-- logs.service.spec.ts.ejs
    |   |       |   |               |   |   |-- metrics
    |   |       |   |               |   |   |   |-- metrics.component.spec.ts.ejs
    |   |       |   |               |   |   |   |-- metrics.service.spec.ts.ejs
    |   |       |   |               |   |   |-- user-management
    |   |       |   |               |   |       |-- user-management-delete-dialog.component.spec.ts.ejs
    |   |       |   |               |   |       |-- user-management-detail.component.spec.ts.ejs
    |   |       |   |               |   |       |-- user-management-update.component.spec.ts.ejs
    |   |       |   |               |   |       |-- user-management.component.spec.ts.ejs
    |   |       |   |               |   |-- core
    |   |       |   |               |   |   |-- user
    |   |       |   |               |   |       |-- account.service.spec.ts.ejs
    |   |       |   |               |   |       |-- user.service.spec.ts.ejs
    |   |       |   |               |   |-- layouts
    |   |       |   |               |   |   |-- main
    |   |       |   |               |   |       |-- main.component.spec.ts.ejs
    |   |       |   |               |   |-- shared
    |   |       |   |               |       |-- alert
    |   |       |   |               |       |   |-- alert-error.component.spec.ts.ejs
    |   |       |   |               |       |-- login
    |   |       |   |               |           |-- login.component.spec.ts.ejs
    |   |       |   |               |-- helpers
    |   |       |   |                   |-- mock-account.service.ts.ejs
    |   |       |   |                   |-- mock-active-modal.service.ts.ejs
    |   |       |   |                   |-- mock-alert.service.ts.ejs
    |   |       |   |                   |-- mock-event-manager.service.ts.ejs
    |   |       |   |                   |-- mock-language.service.ts.ejs
    |   |       |   |                   |-- mock-login.service.ts.ejs
    |   |       |   |                   |-- mock-route.service.ts.ejs
    |   |       |   |                   |-- mock-state-storage.service.ts.ejs
    |   |       |   |                   |-- mock-tracker.service.ts.ejs
    |   |       |   |                   |-- spyobject.ts.ejs
    |   |       |   |-- webpack
    |   |       |       |-- logo-jhipster.png
    |   |       |       |-- utils.js.ejs
    |   |       |       |-- webpack.common.js.ejs
    |   |       |       |-- webpack.dev.js.ejs
    |   |       |       |-- webpack.prod.js.ejs
    |   |       |-- react
    |   |           |-- .editorconfig
    |   |           |-- .eslintignore.ejs
    |   |           |-- .eslintrc.json.ejs
    |   |           |-- .huskyrc.ejs
    |   |           |-- .lintstagedrc.js.ejs
    |   |           |-- package.json.ejs
    |   |           |-- postcss.config.js.ejs
    |   |           |-- tsconfig.e2e.json.ejs
    |   |           |-- tsconfig.json.ejs
    |   |           |-- tsconfig.test.json.ejs
    |   |           |-- src
    |   |           |   |-- main
    |   |           |   |   |-- webapp
    |   |           |   |       |-- 404.html.ejs
    |   |           |   |       |-- favicon.ico
    |   |           |   |       |-- index.html.ejs
    |   |           |   |       |-- manifest.webapp.ejs
    |   |           |   |       |-- robots.txt.ejs
    |   |           |   |       |-- app
    |   |           |   |       |   |-- app.scss.ejs
    |   |           |   |       |   |-- app.tsx.ejs
    |   |           |   |       |   |-- index.tsx.ejs
    |   |           |   |       |   |-- routes.tsx.ejs
    |   |           |   |       |   |-- rtl.scss.ejs
    |   |           |   |       |   |-- typings.d.ts.ejs
    |   |           |   |       |   |-- _bootstrap-variables.scss.ejs
    |   |           |   |       |   |-- config
    |   |           |   |       |   |   |-- axios-interceptor.ts.ejs
    |   |           |   |       |   |   |-- constants.ts.ejs
    |   |           |   |       |   |   |-- devtools.tsx.ejs
    |   |           |   |       |   |   |-- error-middleware.ts.ejs
    |   |           |   |       |   |   |-- icon-loader.ts.ejs
    |   |           |   |       |   |   |-- logger-middleware.ts.ejs
    |   |           |   |       |   |   |-- notification-middleware.ts.ejs
    |   |           |   |       |   |   |-- store.ts.ejs
    |   |           |   |       |   |   |-- translation.ts.ejs
    |   |           |   |       |   |   |-- websocket-middleware.ts.ejs
    |   |           |   |       |   |-- entities
    |   |           |   |       |   |   |-- index.tsx.ejs
    |   |           |   |       |   |-- modules
    |   |           |   |       |   |   |-- account
    |   |           |   |       |   |   |   |-- index.tsx.ejs
    |   |           |   |       |   |   |   |-- activate
    |   |           |   |       |   |   |   |   |-- activate.reducer.ts.ejs
    |   |           |   |       |   |   |   |   |-- activate.tsx.ejs
    |   |           |   |       |   |   |   |-- password
    |   |           |   |       |   |   |   |   |-- password.reducer.ts.ejs
    |   |           |   |       |   |   |   |   |-- password.tsx.ejs
    |   |           |   |       |   |   |   |-- password-reset
    |   |           |   |       |   |   |   |   |-- password-reset.reducer.ts.ejs
    |   |           |   |       |   |   |   |   |-- finish
    |   |           |   |       |   |   |   |   |   |-- password-reset-finish.tsx.ejs
    |   |           |   |       |   |   |   |   |-- init
    |   |           |   |       |   |   |   |       |-- password-reset-init.tsx.ejs
    |   |           |   |       |   |   |   |-- register
    |   |           |   |       |   |   |   |   |-- register.reducer.ts.ejs
    |   |           |   |       |   |   |   |   |-- register.tsx.ejs
    |   |           |   |       |   |   |   |-- sessions
    |   |           |   |       |   |   |   |   |-- sessions.reducer.ts.ejs
    |   |           |   |       |   |   |   |   |-- sessions.tsx.ejs
    |   |           |   |       |   |   |   |-- settings
    |   |           |   |       |   |   |       |-- settings.reducer.ts.ejs
    |   |           |   |       |   |   |       |-- settings.tsx.ejs
    |   |           |   |       |   |   |-- administration
    |   |           |   |       |   |   |   |-- administration.reducer.ts.ejs
    |   |           |   |       |   |   |   |-- index.tsx.ejs
    |   |           |   |       |   |   |   |-- audits
    |   |           |   |       |   |   |   |   |-- audits.tsx.ejs
    |   |           |   |       |   |   |   |-- configuration
    |   |           |   |       |   |   |   |   |-- configuration.tsx.ejs
    |   |           |   |       |   |   |   |-- docs
    |   |           |   |       |   |   |   |   |-- docs.tsx.ejs
    |   |           |   |       |   |   |   |-- gateway
    |   |           |   |       |   |   |   |   |-- gateway.tsx.ejs
    |   |           |   |       |   |   |   |-- health
    |   |           |   |       |   |   |   |   |-- health-modal.tsx.ejs
    |   |           |   |       |   |   |   |   |-- health.tsx.ejs
    |   |           |   |       |   |   |   |-- logs
    |   |           |   |       |   |   |   |   |-- logs.tsx.ejs
    |   |           |   |       |   |   |   |-- metrics
    |   |           |   |       |   |   |   |   |-- metrics-modal.tsx.ejs
    |   |           |   |       |   |   |   |   |-- metrics.tsx.ejs
    |   |           |   |       |   |   |   |   |-- thread-item.tsx.ejs
    |   |           |   |       |   |   |   |-- tracker
    |   |           |   |       |   |   |   |   |-- tracker.tsx.ejs
    |   |           |   |       |   |   |   |-- user-management
    |   |           |   |       |   |   |       |-- index.tsx.ejs
    |   |           |   |       |   |   |       |-- user-management-delete-dialog.tsx.ejs
    |   |           |   |       |   |   |       |-- user-management-detail.tsx.ejs
    |   |           |   |       |   |   |       |-- user-management-update.tsx.ejs
    |   |           |   |       |   |   |       |-- user-management.reducer.ts.ejs
    |   |           |   |       |   |   |       |-- user-management.tsx.ejs
    |   |           |   |       |   |   |-- home
    |   |           |   |       |   |   |   |-- home.scss.ejs
    |   |           |   |       |   |   |   |-- home.tsx.ejs
    |   |           |   |       |   |   |-- login
    |   |           |   |       |   |       |-- login-modal.tsx.ejs
    |   |           |   |       |   |       |-- login.tsx.ejs
    |   |           |   |       |   |       |-- logout.tsx.ejs
    |   |           |   |       |   |-- shared
    |   |           |   |       |       |-- auth
    |   |           |   |       |       |   |-- private-route.tsx.ejs
    |   |           |   |       |       |-- error
    |   |           |   |       |       |   |-- error-boundary-route.tsx.ejs
    |   |           |   |       |       |   |-- error-boundary.tsx.ejs
    |   |           |   |       |       |   |-- page-not-found.tsx.ejs
    |   |           |   |       |       |-- layout
    |   |           |   |       |       |   |-- footer
    |   |           |   |       |       |   |   |-- footer.scss.ejs
    |   |           |   |       |       |   |   |-- footer.tsx.ejs
    |   |           |   |       |       |   |-- header
    |   |           |   |       |       |   |   |-- header-components.tsx.ejs
    |   |           |   |       |       |   |   |-- header.scss.ejs
    |   |           |   |       |       |   |   |-- header.tsx.ejs
    |   |           |   |       |       |   |-- menus
    |   |           |   |       |       |   |   |-- account.tsx.ejs
    |   |           |   |       |       |   |   |-- admin.tsx.ejs
    |   |           |   |       |       |   |   |-- entities.tsx.ejs
    |   |           |   |       |       |   |   |-- index.ts.ejs
    |   |           |   |       |       |   |   |-- locale.tsx.ejs
    |   |           |   |       |       |   |   |-- menu-components.tsx.ejs
    |   |           |   |       |       |   |   |-- menu-item.tsx.ejs
    |   |           |   |       |       |   |-- password
    |   |           |   |       |       |       |-- password-strength-bar.scss.ejs
    |   |           |   |       |       |       |-- password-strength-bar.tsx.ejs
    |   |           |   |       |       |-- model
    |   |           |   |       |       |   |-- user.model.ts.ejs
    |   |           |   |       |       |-- reducers
    |   |           |   |       |       |   |-- action-type.util.ts.ejs
    |   |           |   |       |       |   |-- application-profile.ts.ejs
    |   |           |   |       |       |   |-- authentication.ts.ejs
    |   |           |   |       |       |   |-- index.ts.ejs
    |   |           |   |       |       |   |-- locale.ts.ejs
    |   |           |   |       |       |   |-- user-management.ts.ejs
    |   |           |   |       |       |-- util
    |   |           |   |       |           |-- cookie-utils.ts.ejs
    |   |           |   |       |           |-- date-utils.ts.ejs
    |   |           |   |       |           |-- entity-utils.ts.ejs
    |   |           |   |       |           |-- pagination.constants.ts.ejs
    |   |           |   |       |           |-- url-utils.ts.ejs
    |   |           |   |       |-- content
    |   |           |   |       |   |-- css
    |   |           |   |       |   |   |-- loading.css.ejs
    |   |           |   |       |   |-- images
    |   |           |   |       |       |-- jhipster_family_member_0.svg
    |   |           |   |       |       |-- jhipster_family_member_0_head-192.png
    |   |           |   |       |       |-- jhipster_family_member_0_head-256.png
    |   |           |   |       |       |-- jhipster_family_member_0_head-384.png
    |   |           |   |       |       |-- jhipster_family_member_0_head-512.png
    |   |           |   |       |       |-- jhipster_family_member_1.svg
    |   |           |   |       |       |-- jhipster_family_member_1_head-192.png
    |   |           |   |       |       |-- jhipster_family_member_1_head-256.png
    |   |           |   |       |       |-- jhipster_family_member_1_head-384.png
    |   |           |   |       |       |-- jhipster_family_member_1_head-512.png
    |   |           |   |       |       |-- jhipster_family_member_2.svg
    |   |           |   |       |       |-- jhipster_family_member_2_head-192.png
    |   |           |   |       |       |-- jhipster_family_member_2_head-256.png
    |   |           |   |       |       |-- jhipster_family_member_2_head-384.png
    |   |           |   |       |       |-- jhipster_family_member_2_head-512.png
    |   |           |   |       |       |-- jhipster_family_member_3.svg
    |   |           |   |       |       |-- jhipster_family_member_3_head-192.png
    |   |           |   |       |       |-- jhipster_family_member_3_head-256.png
    |   |           |   |       |       |-- jhipster_family_member_3_head-384.png
    |   |           |   |       |       |-- jhipster_family_member_3_head-512.png
    |   |           |   |       |       |-- logo-jhipster.png
    |   |           |   |       |-- swagger-ui
    |   |           |   |       |   |-- index.html.ejs
    |   |           |   |       |   |-- dist
    |   |           |   |       |       |-- images
    |   |           |   |       |           |-- throbber.gif
    |   |           |   |       |-- WEB-INF
    |   |           |   |           |-- web.xml.ejs
    |   |           |   |-- test
    |   |           |       |-- javascript
    |   |           |           |-- jest.conf.js.ejs
    |   |           |           |-- protractor.conf.js.ejs
    |   |           |           |-- e2e
    |   |           |           |   |-- modules
    |   |           |           |   |   |-- account
    |   |           |           |   |   |   |-- account.spec.ts.ejs
    |   |           |           |   |   |-- administration
    |   |           |           |   |       |-- administration.spec.ts.ejs
    |   |           |           |   |-- page-objects
    |   |           |           |   |   |-- base-component.ts.ejs
    |   |           |           |   |   |-- navbar-page.ts.ejs
    |   |           |           |   |   |-- password-page.ts.ejs
    |   |           |           |   |   |-- register-page.ts.ejs
    |   |           |           |   |   |-- settings-page.ts.ejs
    |   |           |           |   |   |-- signin-page.ts.ejs
    |   |           |           |   |-- util
    |   |           |           |       |-- utils.ts.ejs
    |   |           |           |-- spec
    |   |           |               |-- enzyme-setup.ts.ejs
    |   |           |               |-- storage-mock.ts.ejs
    |   |           |               |-- app
    |   |           |                   |-- utils.ts.ejs
    |   |           |                   |-- config
    |   |           |                   |   |-- axios-interceptor.spec.ts.ejs
    |   |           |                   |   |-- notification-middleware.spec.ts.ejs
    |   |           |                   |-- modules
    |   |           |                   |   |-- account
    |   |           |                   |   |   |-- activate
    |   |           |                   |   |   |   |-- activate.reducer.spec.ts.ejs
    |   |           |                   |   |   |-- password
    |   |           |                   |   |   |   |-- password.reducer.spec.ts.ejs
    |   |           |                   |   |   |-- register
    |   |           |                   |   |   |   |-- register.reducer.spec.ts.ejs
    |   |           |                   |   |   |   |-- register.spec.tsx.ejs
    |   |           |                   |   |   |-- sessions
    |   |           |                   |   |   |   |-- sessions.reducer.spec.ts.ejs
    |   |           |                   |   |   |-- settings
    |   |           |                   |   |       |-- settings.reducer.spec.ts.ejs
    |   |           |                   |   |-- administration
    |   |           |                   |       |-- administration.reducer.spec.ts.ejs
    |   |           |                   |       |-- user-management
    |   |           |                   |           |-- user-management.reducer.spec.ts.ejs
    |   |           |                   |-- shared
    |   |           |                       |-- auth
    |   |           |                       |   |-- private-route.spec.tsx.ejs
    |   |           |                       |-- error
    |   |           |                       |   |-- error-boundary-route.spec.tsx.ejs
    |   |           |                       |   |-- error-boundary.spec.tsx.ejs
    |   |           |                       |-- layout
    |   |           |                       |   |-- header
    |   |           |                       |   |   |-- header.spec.tsx.ejs
    |   |           |                       |   |-- menus
    |   |           |                       |       |-- account.spec.tsx.ejs
    |   |           |                       |-- reducers
    |   |           |                       |   |-- application-profile.spec.ts.ejs
    |   |           |                       |   |-- authentication.spec.ts.ejs
    |   |           |                       |   |-- locale.spec.ts.ejs
    |   |           |                       |   |-- user-management.spec.ts.ejs
    |   |           |                       |-- util
    |   |           |                           |-- entity-utils.spec.ts.ejs
    |   |           |-- webpack
    |   |               |-- logo-jhipster.png
    |   |               |-- utils.js.ejs
    |   |               |-- webpack.common.js.ejs
    |   |               |-- webpack.dev.js.ejs
    |   |               |-- webpack.prod.js.ejs
    |   |-- cloudfoundry
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- application-cloudfoundry.yml.ejs
    |   |       |-- manifest.yml.ejs
    |   |-- common
    |   |   |-- files.js
    |   |   |-- index.js
    |   |   |-- templates
    |   |       |-- .prettierignore.ejs
    |   |       |-- .prettierrc.ejs
    |   |       |-- editorconfig.ejs
    |   |       |-- gitattributes.ejs
    |   |       |-- gitignore.ejs
    |   |       |-- README.md.ejs
    |   |       |-- sonar-project.properties.ejs
    |   |-- docker-compose
    |   |   |-- files.js
    |   |   |-- index.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- consul.yml.ejs
    |   |       |-- docker-compose.yml.ejs
    |   |       |-- jhipster-console.yml.ejs
    |   |       |-- jhipster-registry.yml.ejs
    |   |       |-- kafka.yml.ejs
    |   |       |-- keycloak.yml.ejs
    |   |       |-- prometheus.yml.ejs
    |   |       |-- README-DOCKER-COMPOSE.md.ejs
    |   |       |-- traefik.yml.ejs
    |   |       |-- alertmanager-conf
    |   |       |   |-- config.yml.ejs
    |   |       |-- central-server-config
    |   |       |   |-- application.yml.ejs
    |   |       |-- log-conf
    |   |       |   |-- logstash.conf.ejs
    |   |       |-- log-data
    |   |       |   |-- .gitignore.ejs
    |   |       |-- prometheus-conf
    |   |       |   |-- alert_rules.yml.ejs
    |   |       |   |-- prometheus.yml.ejs
    |   |       |-- realm-config
    |   |       |   |-- jhipster-realm.json.ejs
    |   |       |   |-- jhipster-users-0.json.ejs
    |   |       |-- traefik
    |   |           |-- traefik.toml.ejs
    |   |-- entity
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |-- entity-client
    |   |   |-- files.js
    |   |   |-- index.js
    |   |   |-- templates
    |   |       |-- angular
    |   |       |   |-- src
    |   |       |       |-- main
    |   |       |       |   |-- webapp
    |   |       |       |       |-- app
    |   |       |       |           |-- entities
    |   |       |       |               |-- entity-management-delete-dialog.component.html.ejs
    |   |       |       |               |-- entity-management-delete-dialog.component.ts.ejs
    |   |       |       |               |-- entity-management-detail.component.html.ejs
    |   |       |       |               |-- entity-management-detail.component.ts.ejs
    |   |       |       |               |-- entity-management-update.component.html.ejs
    |   |       |       |               |-- entity-management-update.component.ts.ejs
    |   |       |       |               |-- entity-management.component.html.ejs
    |   |       |       |               |-- entity-management.component.ts.ejs
    |   |       |       |               |-- entity-management.module.ts.ejs
    |   |       |       |               |-- entity-management.route.ts.ejs
    |   |       |       |               |-- entity.model.ts.ejs
    |   |       |       |               |-- entity.service.ts.ejs
    |   |       |       |               |-- infinite-scroll-template.ejs
    |   |       |       |               |-- ng_validators.ejs
    |   |       |       |               |-- no-pagination-template.ejs
    |   |       |       |               |-- pagination-template.ejs
    |   |       |       |               |-- enumerations
    |   |       |       |                   |-- enum.model.ts.ejs
    |   |       |       |-- test
    |   |       |           |-- javascript
    |   |       |               |-- e2e
    |   |       |               |   |-- entities
    |   |       |               |       |-- entity-page-object.ts.ejs
    |   |       |               |       |-- entity.spec.ts.ejs
    |   |       |               |-- spec
    |   |       |                   |-- app
    |   |       |                       |-- entities
    |   |       |                           |-- entity-management-delete-dialog.component.spec.ts.ejs
    |   |       |                           |-- entity-management-detail.component.spec.ts.ejs
    |   |       |                           |-- entity-management-update.component.spec.ts.ejs
    |   |       |                           |-- entity-management.component.spec.ts.ejs
    |   |       |                           |-- entity-management.service.spec.ts.ejs
    |   |       |-- react
    |   |           |-- .editorconfig
    |   |           |-- src
    |   |               |-- main
    |   |               |   |-- webapp
    |   |               |       |-- app
    |   |               |           |-- entities
    |   |               |               |-- entity-delete-dialog.tsx.ejs
    |   |               |               |-- entity-detail.tsx.ejs
    |   |               |               |-- entity-update.tsx.ejs
    |   |               |               |-- entity.model.ts.ejs
    |   |               |               |-- entity.reducer.ts.ejs
    |   |               |               |-- entity.tsx.ejs
    |   |               |               |-- index.tsx.ejs
    |   |               |               |-- react_validators.ejs
    |   |               |               |-- enumerations
    |   |               |                   |-- enum.model.ts.ejs
    |   |               |-- test
    |   |                   |-- javascript
    |   |                       |-- e2e
    |   |                       |   |-- entities
    |   |                       |       |-- entity-page-object.ts.ejs
    |   |                       |       |-- entity-update-page-object.ts.ejs
    |   |                       |       |-- entity.spec.ts.ejs
    |   |                       |-- spec
    |   |                           |-- app
    |   |                               |-- entities
    |   |                                   |-- entity-management-detail.spec.ts.ejs
    |   |                                   |-- entity-reducer.spec.ts.ejs
    |   |-- entity-i18n
    |   |   |-- files.js
    |   |   |-- index.js
    |   |   |-- templates
    |   |       |-- i18n
    |   |           |-- entity_al.json.ejs
    |   |           |-- entity_ar-ly.json.ejs
    |   |           |-- entity_bn.json.ejs
    |   |           |-- entity_by.json.ejs
    |   |           |-- entity_ca.json.ejs
    |   |           |-- entity_cs.json.ejs
    |   |           |-- entity_da.json.ejs
    |   |           |-- entity_de.json.ejs
    |   |           |-- entity_el.json.ejs
    |   |           |-- entity_en.json.ejs
    |   |           |-- entity_es.json.ejs
    |   |           |-- entity_et.json.ejs
    |   |           |-- entity_fa.json.ejs
    |   |           |-- entity_fi.json.ejs
    |   |           |-- entity_fr.json.ejs
    |   |           |-- entity_gl.json.ejs
    |   |           |-- entity_hi.json.ejs
    |   |           |-- entity_hu.json.ejs
    |   |           |-- entity_hy.json.ejs
    |   |           |-- entity_in.json.ejs
    |   |           |-- entity_it.json.ejs
    |   |           |-- entity_ja.json.ejs
    |   |           |-- entity_ko.json.ejs
    |   |           |-- entity_mr.json.ejs
    |   |           |-- entity_my.json.ejs
    |   |           |-- entity_nl.json.ejs
    |   |           |-- entity_pl.json.ejs
    |   |           |-- entity_pt-br.json.ejs
    |   |           |-- entity_pt-pt.json.ejs
    |   |           |-- entity_ro.json.ejs
    |   |           |-- entity_ru.json.ejs
    |   |           |-- entity_sk.json.ejs
    |   |           |-- entity_sr.json.ejs
    |   |           |-- entity_sv.json.ejs
    |   |           |-- entity_ta.json.ejs
    |   |           |-- entity_te.json.ejs
    |   |           |-- entity_th.json.ejs
    |   |           |-- entity_tr.json.ejs
    |   |           |-- entity_ua.json.ejs
    |   |           |-- entity_uz-Cyrl-uz.json.ejs
    |   |           |-- entity_uz-Latn-uz.json.ejs
    |   |           |-- entity_vi.json.ejs
    |   |           |-- entity_zh-cn.json.ejs
    |   |           |-- entity_zh-tw.json.ejs
    |   |           |-- enum.json.ejs
    |   |-- entity-server
    |   |   |-- files.js
    |   |   |-- index.js
    |   |   |-- templates
    |   |       |-- src
    |   |           |-- main
    |   |           |   |-- java
    |   |           |   |   |-- package
    |   |           |   |       |-- common
    |   |           |   |       |   |-- delete_template.ejs
    |   |           |   |       |   |-- field_validators.ejs
    |   |           |   |       |   |-- get_all_stream_template.ejs
    |   |           |   |       |   |-- get_all_template.ejs
    |   |           |   |       |   |-- get_filtered_template.ejs
    |   |           |   |       |   |-- get_template.ejs
    |   |           |   |       |   |-- inject_template.ejs
    |   |           |   |       |   |-- save_template.ejs
    |   |           |   |       |   |-- search_stream_template.ejs
    |   |           |   |       |   |-- search_template.ejs
    |   |           |   |       |-- domain
    |   |           |   |       |   |-- Entity.java.ejs
    |   |           |   |       |   |-- imports.ejs
    |   |           |   |       |   |-- relationship_validators.ejs
    |   |           |   |       |   |-- enumeration
    |   |           |   |       |       |-- Enum.java.ejs
    |   |           |   |       |-- repository
    |   |           |   |       |   |-- EntityRepository.java.ejs
    |   |           |   |       |   |-- reactive
    |   |           |   |       |   |   |-- EntityReactiveRepository.java.ejs
    |   |           |   |       |   |-- search
    |   |           |   |       |       |-- EntitySearchRepository.java.ejs
    |   |           |   |       |-- service
    |   |           |   |       |   |-- EntityQueryService.java.ejs
    |   |           |   |       |   |-- EntityService.java.ejs
    |   |           |   |       |   |-- dto
    |   |           |   |       |   |   |-- EntityCriteria.java.ejs
    |   |           |   |       |   |   |-- EntityDTO.java.ejs
    |   |           |   |       |   |-- impl
    |   |           |   |       |   |   |-- EntityServiceImpl.java.ejs
    |   |           |   |       |   |-- mapper
    |   |           |   |       |       |-- BaseEntityMapper.java.ejs
    |   |           |   |       |       |-- EntityMapper.java.ejs
    |   |           |   |       |-- web
    |   |           |   |           |-- rest
    |   |           |   |               |-- EntityResource.java.ejs
    |   |           |   |-- resources
    |   |           |       |-- config
    |   |           |           |-- cql
    |   |           |           |   |-- changelog
    |   |           |           |       |-- added_entity.cql.ejs
    |   |           |           |-- liquibase
    |   |           |               |-- changelog
    |   |           |               |   |-- added_entity.xml.ejs
    |   |           |               |   |-- added_entity_constraints.xml.ejs
    |   |           |               |-- fake-data
    |   |           |                   |-- table.csv.ejs
    |   |           |                   |-- blob
    |   |           |                       |-- hipster.png
    |   |           |                       |-- hipster.txt.ejs
    |   |           |-- test
    |   |               |-- gatling
    |   |               |   |-- user-files
    |   |               |       |-- simulations
    |   |               |           |-- EntityGatlingTest.scala.ejs
    |   |               |-- java
    |   |                   |-- package
    |   |                       |-- repository
    |   |                       |   |-- search
    |   |                       |       |-- EntitySearchRepositoryMockConfiguration.java.ejs
    |   |                       |-- web
    |   |                           |-- rest
    |   |                               |-- EntityResourceIT.java.ejs
    |   |-- export-jdl
    |   |   |-- index.js
    |   |   |-- USAGE
    |   |-- gae
    |   |   |-- index.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- app.yaml.ejs
    |   |       |-- application-prod-gae.yml.ejs
    |   |       |-- gae.gradle.ejs
    |   |       |-- pom-plugin.xml.ejs
    |   |       |-- pom-profile.xml.ejs
    |   |-- heroku
    |   |   |-- index.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- application-heroku.yml.ejs
    |   |       |-- bootstrap-heroku.yml.ejs
    |   |       |-- heroku.gradle.ejs
    |   |       |-- pom-profile.xml.ejs
    |   |       |-- Procfile.ejs
    |   |-- info
    |   |   |-- index.js
    |   |   |-- USAGE
    |   |-- kubernetes
    |   |   |-- files.js
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- deployment.yml.ejs
    |   |       |-- ingress.yml.ejs
    |   |       |-- k8s-addons.sh.ejs
    |   |       |-- kubectl-apply.sh.ejs
    |   |       |-- namespace.yml.ejs
    |   |       |-- README-KUBERNETES.md.ejs
    |   |       |-- service.yml.ejs
    |   |       |-- console
    |   |       |   |-- jhipster-console.yml.ejs
    |   |       |   |-- jhipster-dashboard-console.yml.ejs
    |   |       |   |-- jhipster-elasticsearch.yml.ejs
    |   |       |   |-- jhipster-logstash.yml.ejs
    |   |       |   |-- jhipster-zipkin.yml.ejs
    |   |       |   |-- logstash-config.yml.ejs
    |   |       |-- db
    |   |       |   |-- couchbase.yml.ejs
    |   |       |   |-- elasticsearch.yml.ejs
    |   |       |   |-- mariadb.yml.ejs
    |   |       |   |-- mongodb.yml.ejs
    |   |       |   |-- mssql.yml.ejs
    |   |       |   |-- mysql.yml.ejs
    |   |       |   |-- postgresql.yml.ejs
    |   |       |-- istio
    |   |       |   |-- destination-rule.yml.ejs
    |   |       |   |-- gateway.yml.ejs
    |   |       |   |-- virtual-service.yml.ejs
    |   |       |   |-- gateway
    |   |       |       |-- grafana-gateway.yml.ejs
    |   |       |       |-- jaeger-gateway.yml.ejs
    |   |       |       |-- jhipster-console-gateway.yml.ejs
    |   |       |       |-- jhipster-grafana-gateway.yml.ejs
    |   |       |       |-- kiali-gateway.yml.ejs
    |   |       |-- messagebroker
    |   |       |   |-- kafka.yml.ejs
    |   |       |-- monitoring
    |   |       |   |-- jhipster-grafana-dashboard.yml.ejs
    |   |       |   |-- jhipster-grafana.yml.ejs
    |   |       |   |-- jhipster-prometheus-cr.yml.ejs
    |   |       |   |-- jhipster-prometheus-crd.yml.ejs
    |   |       |   |-- jhipster-prometheus-sm.yml.ejs
    |   |       |-- registry
    |   |       |   |-- application-configmap.yml.ejs
    |   |       |   |-- consul-config-loader.yml.ejs
    |   |       |   |-- consul.yml.ejs
    |   |       |   |-- jhipster-registry.yml.ejs
    |   |       |-- secret
    |   |           |-- jwt-secret.yml.ejs
    |   |-- kubernetes-helm
    |   |   |-- files.js
    |   |   |-- index.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- helm-apply.sh.ejs
    |   |       |-- helm-upgrade.sh.ejs
    |   |       |-- README-KUBERNETES-HELM.md.ejs
    |   |       |-- app
    |   |       |   |-- Chart.yml.ejs
    |   |       |   |-- helpers.tpl.ejs
    |   |       |   |-- requirements.yml.ejs
    |   |       |   |-- values.yml.ejs
    |   |       |-- csvc
    |   |           |-- Chart.yml.ejs
    |   |           |-- helpers.tpl.ejs
    |   |           |-- requirements.yml.ejs
    |   |           |-- values.yml.ejs
    |   |-- languages
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- src
    |   |           |-- main
    |   |           |   |-- resources
    |   |           |   |   |-- i18n
    |   |           |   |       |-- messages_al.properties.ejs
    |   |           |   |       |-- messages_ar_LY.properties.ejs
    |   |           |   |       |-- messages_bn.properties.ejs
    |   |           |   |       |-- messages_by.properties.ejs
    |   |           |   |       |-- messages_ca.properties.ejs
    |   |           |   |       |-- messages_cs.properties.ejs
    |   |           |   |       |-- messages_da.properties.ejs
    |   |           |   |       |-- messages_de.properties.ejs
    |   |           |   |       |-- messages_el.properties.ejs
    |   |           |   |       |-- messages_en.properties.ejs
    |   |           |   |       |-- messages_es.properties.ejs
    |   |           |   |       |-- messages_et.properties.ejs
    |   |           |   |       |-- messages_fa.properties.ejs
    |   |           |   |       |-- messages_fi.properties.ejs
    |   |           |   |       |-- messages_fr.properties.ejs
    |   |           |   |       |-- messages_gl.properties.ejs
    |   |           |   |       |-- messages_hi.properties.ejs
    |   |           |   |       |-- messages_hu.properties.ejs
    |   |           |   |       |-- messages_hy.properties.ejs
    |   |           |   |       |-- messages_in.properties.ejs
    |   |           |   |       |-- messages_it.properties.ejs
    |   |           |   |       |-- messages_ja.properties.ejs
    |   |           |   |       |-- messages_ko.properties.ejs
    |   |           |   |       |-- messages_mr.properties.ejs
    |   |           |   |       |-- messages_my.properties.ejs
    |   |           |   |       |-- messages_nl.properties.ejs
    |   |           |   |       |-- messages_pl.properties.ejs
    |   |           |   |       |-- messages_pt_BR.properties.ejs
    |   |           |   |       |-- messages_pt_PT.properties.ejs
    |   |           |   |       |-- messages_ro.properties.ejs
    |   |           |   |       |-- messages_ru.properties.ejs
    |   |           |   |       |-- messages_sk.properties.ejs
    |   |           |   |       |-- messages_sr.properties.ejs
    |   |           |   |       |-- messages_sv.properties.ejs
    |   |           |   |       |-- messages_ta.properties.ejs
    |   |           |   |       |-- messages_te.properties.ejs
    |   |           |   |       |-- messages_th.properties.ejs
    |   |           |   |       |-- messages_tr.properties.ejs
    |   |           |   |       |-- messages_ua.properties.ejs
    |   |           |   |       |-- messages_uz_Cyrl_UZ.properties.ejs
    |   |           |   |       |-- messages_uz_Latn_UZ.properties.ejs
    |   |           |   |       |-- messages_vi.properties.ejs
    |   |           |   |       |-- messages_zh_CN.properties.ejs
    |   |           |   |       |-- messages_zh_TW.properties.ejs
    |   |           |   |-- webapp
    |   |           |       |-- i18n
    |   |           |           |-- al
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- ar-ly
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- bn
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- by
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- ca
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- cs
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- da
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- de
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- el
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- en
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- es
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- et
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- fa
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- fi
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- fr
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- gl
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- hi
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- hu
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- hy
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- in
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- it
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- ja
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- ko
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- mr
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- my
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- nl
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- pl
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- pt-br
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- pt-pt
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- ro
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- ru
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- sk
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- sr
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- sv
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- ta
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- te
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- th
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- tr
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- ua
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- uz-Cyrl-uz
    |   |           |           |   |-- activate.json
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- uz-Latn-uz
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- vi
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- zh-cn
    |   |           |           |   |-- activate.json.ejs
    |   |           |           |   |-- audits.json
    |   |           |           |   |-- configuration.json
    |   |           |           |   |-- error.json
    |   |           |           |   |-- gateway.json
    |   |           |           |   |-- global.json.ejs
    |   |           |           |   |-- health.json.ejs
    |   |           |           |   |-- home.json
    |   |           |           |   |-- login.json
    |   |           |           |   |-- logs.json
    |   |           |           |   |-- metrics.json
    |   |           |           |   |-- password.json
    |   |           |           |   |-- register.json
    |   |           |           |   |-- reset.json.ejs
    |   |           |           |   |-- sessions.json
    |   |           |           |   |-- settings.json
    |   |           |           |   |-- tracker.json
    |   |           |           |   |-- user-management.json
    |   |           |           |-- zh-tw
    |   |           |               |-- activate.json.ejs
    |   |           |               |-- audits.json
    |   |           |               |-- configuration.json
    |   |           |               |-- error.json
    |   |           |               |-- gateway.json
    |   |           |               |-- global.json.ejs
    |   |           |               |-- health.json.ejs
    |   |           |               |-- home.json
    |   |           |               |-- login.json
    |   |           |               |-- logs.json
    |   |           |               |-- metrics.json
    |   |           |               |-- password.json
    |   |           |               |-- register.json
    |   |           |               |-- reset.json.ejs
    |   |           |               |-- sessions.json
    |   |           |               |-- settings.json
    |   |           |               |-- tracker.json
    |   |           |               |-- user-management.json
    |   |           |-- test
    |   |               |-- resources
    |   |                   |-- i18n
    |   |                       |-- messages_al.properties.ejs
    |   |                       |-- messages_ar_LY.properties.ejs
    |   |                       |-- messages_bn.properties.ejs
    |   |                       |-- messages_by.properties.ejs
    |   |                       |-- messages_ca.properties.ejs
    |   |                       |-- messages_cs.properties.ejs
    |   |                       |-- messages_da.properties.ejs
    |   |                       |-- messages_de.properties.ejs
    |   |                       |-- messages_el.properties.ejs
    |   |                       |-- messages_en.properties.ejs
    |   |                       |-- messages_es.properties.ejs
    |   |                       |-- messages_et.properties.ejs
    |   |                       |-- messages_fa.properties.ejs
    |   |                       |-- messages_fi.properties.ejs
    |   |                       |-- messages_fr.properties.ejs
    |   |                       |-- messages_gl.properties.ejs
    |   |                       |-- messages_hi.properties.ejs
    |   |                       |-- messages_hu.properties.ejs
    |   |                       |-- messages_hy.properties.ejs
    |   |                       |-- messages_in.properties.ejs
    |   |                       |-- messages_it.properties.ejs
    |   |                       |-- messages_ja.properties.ejs
    |   |                       |-- messages_ko.properties.ejs
    |   |                       |-- messages_mr.properties.ejs
    |   |                       |-- messages_my.properties.ejs
    |   |                       |-- messages_nl.properties.ejs
    |   |                       |-- messages_pl.properties.ejs
    |   |                       |-- messages_pt_BR.properties.ejs
    |   |                       |-- messages_pt_PT.properties.ejs
    |   |                       |-- messages_ro.properties.ejs
    |   |                       |-- messages_ru.properties.ejs
    |   |                       |-- messages_sk.properties.ejs
    |   |                       |-- messages_sr.properties.ejs
    |   |                       |-- messages_sv.properties.ejs
    |   |                       |-- messages_ta.properties.ejs
    |   |                       |-- messages_te.properties.ejs
    |   |                       |-- messages_th.properties.ejs
    |   |                       |-- messages_tr.properties.ejs
    |   |                       |-- messages_ua.properties.ejs
    |   |                       |-- messages_uz_Cyrl_UZ.properties.ejs
    |   |                       |-- messages_uz_Latn_UZ.properties.ejs
    |   |                       |-- messages_vi.properties.ejs
    |   |                       |-- messages_zh_CN.properties.ejs
    |   |                       |-- messages_zh_TW.properties.ejs
    |   |-- openapi-client
    |   |   |-- files.js
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- src
    |   |       |   |-- main
    |   |       |       |-- java
    |   |       |           |-- package
    |   |       |               |-- client
    |   |       |                   |-- _ExcludeFromComponentScan.java
    |   |       |-- swagger-codegen
    |   |           |-- libraries
    |   |               |-- spring-cloud
    |   |                   |-- apiClient.mustache
    |   |                   |-- clientConfiguration.mustache
    |   |-- openshift
    |   |   |-- files.js
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- apply.sh.ejs
    |   |       |-- deployment.yml.ejs
    |   |       |-- db
    |   |       |   |-- cassandra.yml.ejs
    |   |       |   |-- couchbase.yml.ejs
    |   |       |   |-- elasticsearch.yml.ejs
    |   |       |   |-- mariadb.yml.ejs
    |   |       |   |-- mongodb.yml.ejs
    |   |       |   |-- mysql.yml.ejs
    |   |       |   |-- postgresql.yml.ejs
    |   |       |-- messagebroker
    |   |       |   |-- kafka.yml.ejs
    |   |       |-- monitoring
    |   |       |   |-- jhipster-metrics.yml.ejs
    |   |       |   |-- jhipster-monitoring.yml.ejs
    |   |       |-- registry
    |   |       |   |-- application-configmap.yml.ejs
    |   |       |   |-- consul.yml.ejs
    |   |       |   |-- jhipster-registry.yml.ejs
    |   |       |-- scc
    |   |           |-- scc-config.yml.ejs
    |   |-- server
    |   |   |-- files.js
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |   |-- needle-api
    |   |   |   |-- needle-server-cache.js
    |   |   |   |-- needle-server-gradle.js
    |   |   |   |-- needle-server-liquibase.js
    |   |   |   |-- needle-server-maven.js
    |   |   |   |-- needle-server.js
    |   |   |-- templates
    |   |       |-- build.gradle.ejs
    |   |       |-- gradle.properties.ejs
    |   |       |-- gradlew
    |   |       |-- gradlew.bat
    |   |       |-- micro_services_architecture.md
    |   |       |-- mvnw
    |   |       |-- mvnw.cmd
    |   |       |-- package.json.ejs
    |   |       |-- pom.xml.ejs
    |   |       |-- settings.gradle.ejs
    |   |       |-- .mvn
    |   |       |   |-- wrapper
    |   |       |       |-- maven-wrapper.jar
    |   |       |       |-- maven-wrapper.properties
    |   |       |       |-- MavenWrapperDownloader.java
    |   |       |-- gradle
    |   |       |   |-- docker.gradle.ejs
    |   |       |   |-- profile_dev.gradle.ejs
    |   |       |   |-- profile_prod.gradle.ejs
    |   |       |   |-- sonar.gradle.ejs
    |   |       |   |-- swagger.gradle.ejs
    |   |       |   |-- war.gradle.ejs
    |   |       |   |-- zipkin.gradle.ejs
    |   |       |   |-- wrapper
    |   |       |       |-- gradle-wrapper.jar
    |   |       |       |-- gradle-wrapper.properties
    |   |       |-- src
    |   |           |-- main
    |   |           |   |-- docker
    |   |           |   |   |-- app.yml.ejs
    |   |           |   |   |-- cassandra-cluster.yml.ejs
    |   |           |   |   |-- cassandra-migration.yml.ejs
    |   |           |   |   |-- cassandra.yml.ejs
    |   |           |   |   |-- consul.yml.ejs
    |   |           |   |   |-- couchbase-cluster.yml.ejs
    |   |           |   |   |-- couchbase.yml.ejs
    |   |           |   |   |-- elasticsearch.yml.ejs
    |   |           |   |   |-- hazelcast-management-center.yml.ejs
    |   |           |   |   |-- jhipster-registry.yml.ejs
    |   |           |   |   |-- kafka.yml.ejs
    |   |           |   |   |-- keycloak.yml.ejs
    |   |           |   |   |-- mariadb.yml.ejs
    |   |           |   |   |-- memcached.yml.ejs
    |   |           |   |   |-- mongodb-cluster.yml.ejs
    |   |           |   |   |-- mongodb.yml.ejs
    |   |           |   |   |-- monitoring.yml.ejs
    |   |           |   |   |-- mssql.yml.ejs
    |   |           |   |   |-- mysql.yml.ejs
    |   |           |   |   |-- postgresql.yml.ejs
    |   |           |   |   |-- sonar.yml.ejs
    |   |           |   |   |-- swagger-editor.yml.ejs
    |   |           |   |   |-- cassandra
    |   |           |   |   |   |-- Cassandra-Migration.Dockerfile.ejs
    |   |           |   |   |   |-- scripts
    |   |           |   |   |       |-- autoMigrate.sh.ejs
    |   |           |   |   |       |-- execute-cql.sh.ejs
    |   |           |   |   |-- config
    |   |           |   |   |   |-- git2consul.json.ejs
    |   |           |   |   |   |-- README.md.ejs
    |   |           |   |   |   |-- consul-config
    |   |           |   |   |   |   |-- application.yml.ejs
    |   |           |   |   |   |-- docker-config
    |   |           |   |   |   |   |-- application.yml.ejs
    |   |           |   |   |   |-- localhost-config
    |   |           |   |   |   |   |-- application.yml.ejs
    |   |           |   |   |   |-- realm-config
    |   |           |   |   |       |-- jhipster-realm.json.ejs
    |   |           |   |   |       |-- jhipster-users-0.json.ejs
    |   |           |   |   |-- couchbase
    |   |           |   |   |   |-- Couchbase.Dockerfile.ejs
    |   |           |   |   |   |-- scripts
    |   |           |   |   |       |-- configure-node.sh.ejs
    |   |           |   |   |-- grafana
    |   |           |   |   |   |-- provisioning
    |   |           |   |   |       |-- dashboards
    |   |           |   |   |       |   |-- dashboard.yml.ejs
    |   |           |   |   |       |   |-- JVM.json.ejs
    |   |           |   |   |       |-- datasources
    |   |           |   |   |           |-- datasource.yml.ejs
    |   |           |   |   |-- mongodb
    |   |           |   |   |   |-- MongoDB.Dockerfile.ejs
    |   |           |   |   |   |-- scripts
    |   |           |   |   |       |-- init_replicaset.js.ejs
    |   |           |   |   |-- prometheus
    |   |           |   |       |-- prometheus.yml.ejs
    |   |           |   |-- java
    |   |           |   |   |-- package
    |   |           |   |       |-- Application.java.ejs
    |   |           |   |       |-- ApplicationWebXml.java.ejs
    |   |           |   |       |-- aop
    |   |           |   |       |   |-- logging
    |   |           |   |       |       |-- LoggingAspect.java.ejs
    |   |           |   |       |-- client
    |   |           |   |       |   |-- AuthorizedFeignClient.java.ejs
    |   |           |   |       |   |-- AuthorizedUserFeignClient.java.ejs
    |   |           |   |       |   |-- JWT_UserFeignClientInterceptor.java.ejs
    |   |           |   |       |   |-- OAuth2InterceptedFeignConfiguration.java.ejs
    |   |           |   |       |   |-- OAuth2UserClientFeignConfiguration.java.ejs
    |   |           |   |       |   |-- OAuth2_UserFeignClientInterceptor.java.ejs
    |   |           |   |       |   |-- TokenRelayRequestInterceptor.java.ejs
    |   |           |   |       |-- config
    |   |           |   |       |   |-- ApplicationProperties.java.ejs
    |   |           |   |       |   |-- AsyncConfiguration.java.ejs
    |   |           |   |       |   |-- CacheConfiguration.java.ejs
    |   |           |   |       |   |-- CacheFactoryConfiguration.java.ejs
    |   |           |   |       |   |-- CloudDatabaseConfiguration.java.ejs
    |   |           |   |       |   |-- Constants.java.ejs
    |   |           |   |       |   |-- DatabaseConfiguration.java.ejs
    |   |           |   |       |   |-- DateTimeFormatConfiguration.java.ejs
    |   |           |   |       |   |-- DefaultProfileUtil.java.ejs
    |   |           |   |       |   |-- ElasticsearchConfiguration.java.ejs
    |   |           |   |       |   |-- FeignConfiguration.java.ejs
    |   |           |   |       |   |-- GatewayConfiguration.java.ejs
    |   |           |   |       |   |-- JacksonConfiguration.java.ejs
    |   |           |   |       |   |-- LiquibaseConfiguration.java.ejs
    |   |           |   |       |   |-- LocaleConfiguration.java.ejs
    |   |           |   |       |   |-- LoggingAspectConfiguration.java.ejs
    |   |           |   |       |   |-- LoggingConfiguration.java.ejs
    |   |           |   |       |   |-- MessagingConfiguration.java.ejs
    |   |           |   |       |   |-- OAuth2SsoConfiguration.java.ejs
    |   |           |   |       |   |-- OAuth2TokenServicesConfiguration.java.ejs
    |   |           |   |       |   |-- package-info.java.ejs
    |   |           |   |       |   |-- ReactivePageableHandlerMethodArgumentResolver.java.ejs
    |   |           |   |       |   |-- ReactiveSecurityConfiguration.java.ejs
    |   |           |   |       |   |-- ReactiveSortHandlerMethodArgumentResolver.java.ejs
    |   |           |   |       |   |-- SecurityConfiguration.java.ejs
    |   |           |   |       |   |-- UaaConfiguration.java.ejs
    |   |           |   |       |   |-- UaaProperties.java.ejs
    |   |           |   |       |   |-- UaaWebSecurityConfiguration.java.ejs
    |   |           |   |       |   |-- WebConfigurer.java.ejs
    |   |           |   |       |   |-- WebsocketConfiguration.java.ejs
    |   |           |   |       |   |-- WebsocketSecurityConfiguration.java.ejs
    |   |           |   |       |   |-- apidoc
    |   |           |   |       |   |   |-- GatewaySwaggerResourcesProvider.java.ejs
    |   |           |   |       |   |-- audit
    |   |           |   |       |   |   |-- AuditEventConverter.java.ejs
    |   |           |   |       |   |   |-- package-info.java.ejs
    |   |           |   |       |   |-- cassandra
    |   |           |   |       |   |   |-- CassandraConfiguration.java.ejs
    |   |           |   |       |   |   |-- package-info.java.ejs
    |   |           |   |       |   |-- dbmigrations
    |   |           |   |       |   |   |-- InitialSetupMigration.java.ejs
    |   |           |   |       |   |   |-- package-info.java.ejs
    |   |           |   |       |   |-- metrics
    |   |           |   |       |   |   |-- CassandraHealthIndicator.java.ejs
    |   |           |   |       |   |   |-- JHipsterHealthIndicatorConfiguration.java.ejs
    |   |           |   |       |   |   |-- package-info.java.ejs
    |   |           |   |       |   |-- oauth2
    |   |           |   |       |       |-- OAuth2AuthenticationConfiguration.java.ejs
    |   |           |   |       |       |-- OAuth2JwtAccessTokenConverter.java.ejs
    |   |           |   |       |       |-- OAuth2Properties.java.ejs
    |   |           |   |       |-- domain
    |   |           |   |       |   |-- AbstractAuditingEntity.java.ejs
    |   |           |   |       |   |-- Authority.java.ejs
    |   |           |   |       |   |-- package-info.java.ejs
    |   |           |   |       |   |-- PersistentAuditEvent.java.ejs
    |   |           |   |       |   |-- PersistentToken.java.ejs
    |   |           |   |       |   |-- User.java.ejs
    |   |           |   |       |-- gateway
    |   |           |   |       |   |-- TokenRelayFilter.java.ejs
    |   |           |   |       |   |-- accesscontrol
    |   |           |   |       |   |   |-- AccessControlFilter.java.ejs
    |   |           |   |       |   |-- ratelimiting
    |   |           |   |       |   |   |-- RateLimitingFilter.java.ejs
    |   |           |   |       |   |-- responserewriting
    |   |           |   |       |       |-- SwaggerBasePathRewritingFilter.java.ejs
    |   |           |   |       |-- repository
    |   |           |   |       |   |-- AuthorityRepository.java.ejs
    |   |           |   |       |   |-- CustomAuditEventRepository.java.ejs
    |   |           |   |       |   |-- CustomN1qlCouchbaseRepository.java.ejs
    |   |           |   |       |   |-- N1qlCouchbaseRepository.java.ejs
    |   |           |   |       |   |-- package-info.java.ejs
    |   |           |   |       |   |-- PersistenceAuditEventRepository.java.ejs
    |   |           |   |       |   |-- PersistentTokenRepository.java.ejs
    |   |           |   |       |   |-- UserRepository.java.ejs
    |   |           |   |       |   |-- reactive
    |   |           |   |       |   |   |-- CustomReactiveN1qlCouchbaseRepository.java.ejs
    |   |           |   |       |   |   |-- ReactiveN1qlCouchbaseRepository.java.ejs
    |   |           |   |       |   |-- search
    |   |           |   |       |       |-- package-info.java.ejs
    |   |           |   |       |       |-- UserSearchRepository.java.ejs
    |   |           |   |       |-- security
    |   |           |   |       |   |-- AuthoritiesConstants.java.ejs
    |   |           |   |       |   |-- DomainUserDetailsService.java.ejs
    |   |           |   |       |   |-- IatTokenEnhancer.java.ejs
    |   |           |   |       |   |-- package-info.java.ejs
    |   |           |   |       |   |-- PersistentTokenRememberMeServices.java.ejs
    |   |           |   |       |   |-- SecurityUtils.java.ejs
    |   |           |   |       |   |-- SpringSecurityAuditorAware.java.ejs
    |   |           |   |       |   |-- UserNotActivatedException.java.ejs
    |   |           |   |       |   |-- jwt
    |   |           |   |       |   |   |-- JWTConfigurer.java.ejs
    |   |           |   |       |   |   |-- JWTFilter.java.ejs
    |   |           |   |       |   |   |-- TokenProvider.java.ejs
    |   |           |   |       |   |-- oauth2
    |   |           |   |       |       |-- AudienceValidator.java.ejs
    |   |           |   |       |       |-- AuthorizationHeaderFilter.java.ejs
    |   |           |   |       |       |-- AuthorizationHeaderUtil.java.ejs
    |   |           |   |       |       |-- CachedUserInfoTokenServices.java.ejs
    |   |           |   |       |       |-- CookieCollection.java.ejs
    |   |           |   |       |       |-- CookiesHttpServletRequestWrapper.java.ejs
    |   |           |   |       |       |-- CookieTokenExtractor.java.ejs
    |   |           |   |       |       |-- JwtAuthorityExtractor.java.ejs
    |   |           |   |       |       |-- OAuth2AuthenticationService.java.ejs
    |   |           |   |       |       |-- OAuth2CookieHelper.java.ejs
    |   |           |   |       |       |-- OAuth2Cookies.java.ejs
    |   |           |   |       |       |-- OAuth2SignatureVerifierClient.java.ejs
    |   |           |   |       |       |-- OAuth2TokenEndpointClient.java.ejs
    |   |           |   |       |       |-- OAuth2TokenEndpointClientAdapter.java.ejs
    |   |           |   |       |       |-- OAuthIdpTokenResponseDTO.java.ejs
    |   |           |   |       |       |-- SimpleAuthoritiesExtractor.java.ejs
    |   |           |   |       |       |-- SimplePrincipalExtractor.java.ejs
    |   |           |   |       |       |-- UaaSignatureVerifierClient.java.ejs
    |   |           |   |       |       |-- UaaTokenEndpointClient.java.ejs
    |   |           |   |       |-- service
    |   |           |   |       |   |-- AuditEventService.java.ejs
    |   |           |   |       |   |-- EmailAlreadyUsedException.java.ejs
    |   |           |   |       |   |-- InvalidPasswordException.java.ejs
    |   |           |   |       |   |-- KafkaConsumer.java.ejs
    |   |           |   |       |   |-- KafkaProducer.java.ejs
    |   |           |   |       |   |-- MailService.java.ejs
    |   |           |   |       |   |-- package-info.java.ejs
    |   |           |   |       |   |-- UsernameAlreadyUsedException.java.ejs
    |   |           |   |       |   |-- UserService.java.ejs
    |   |           |   |       |   |-- dto
    |   |           |   |       |   |   |-- package-info.java.ejs
    |   |           |   |       |   |   |-- PasswordChangeDTO.java.ejs
    |   |           |   |       |   |   |-- UserDTO.java.ejs
    |   |           |   |       |   |-- mapper
    |   |           |   |       |   |   |-- package-info.java.ejs
    |   |           |   |       |   |   |-- UserMapper.java.ejs
    |   |           |   |       |   |-- util
    |   |           |   |       |       |-- RandomUtil.java.ejs
    |   |           |   |       |-- web
    |   |           |   |           |-- filter
    |   |           |   |           |   |-- RefreshTokenFilter.java.ejs
    |   |           |   |           |   |-- RefreshTokenFilterConfigurer.java.ejs
    |   |           |   |           |-- rest
    |   |           |   |           |   |-- AccountResource.java.ejs
    |   |           |   |           |   |-- AuditResource.java.ejs
    |   |           |   |           |   |-- AuthInfoResource.java.ejs
    |   |           |   |           |   |-- AuthResource.java.ejs
    |   |           |   |           |   |-- ClientForwardController.java.ejs
    |   |           |   |           |   |-- GatewayResource.java.ejs
    |   |           |   |           |   |-- KafkaResource.java.ejs
    |   |           |   |           |   |-- LogoutResource.java.ejs
    |   |           |   |           |   |-- package-info.java.ejs
    |   |           |   |           |   |-- UserJWTController.java.ejs
    |   |           |   |           |   |-- UserResource.java.ejs
    |   |           |   |           |   |-- errors
    |   |           |   |           |   |   |-- BadRequestAlertException.java.ejs
    |   |           |   |           |   |   |-- EmailAlreadyUsedException.java.ejs
    |   |           |   |           |   |   |-- EmailNotFoundException.java.ejs
    |   |           |   |           |   |   |-- ErrorConstants.java.ejs
    |   |           |   |           |   |   |-- ExceptionTranslator.java.ejs
    |   |           |   |           |   |   |-- FieldErrorVM.java.ejs
    |   |           |   |           |   |   |-- InvalidPasswordException.java.ejs
    |   |           |   |           |   |   |-- LoginAlreadyUsedException.java.ejs
    |   |           |   |           |   |   |-- package-info.java.ejs
    |   |           |   |           |   |-- vm
    |   |           |   |           |       |-- KeyAndPasswordVM.java.ejs
    |   |           |   |           |       |-- LoginVM.java.ejs
    |   |           |   |           |       |-- ManagedUserVM.java.ejs
    |   |           |   |           |       |-- package-info.java.ejs
    |   |           |   |           |       |-- RouteVM.java.ejs
    |   |           |   |           |-- websocket
    |   |           |   |               |-- ActivityService.java.ejs
    |   |           |   |               |-- package-info.java.ejs
    |   |           |   |               |-- dto
    |   |           |   |                   |-- ActivityDTO.java.ejs
    |   |           |   |                   |-- package-info.java.ejs
    |   |           |   |-- jib
    |   |           |   |   |-- entrypoint.sh.ejs
    |   |           |   |-- resources
    |   |           |       |-- banner-no-color.txt
    |   |           |       |-- banner-react.txt
    |   |           |       |-- banner.txt
    |   |           |       |-- h2.server.properties.ejs
    |   |           |       |-- logback-spring.xml.ejs
    |   |           |       |-- config
    |   |           |       |   |-- application-dev.yml.ejs
    |   |           |       |   |-- application-prod.yml.ejs
    |   |           |       |   |-- application-tls.yml.ejs
    |   |           |       |   |-- application.yml.ejs
    |   |           |       |   |-- bootstrap-prod.yml.ejs
    |   |           |       |   |-- bootstrap.yml.ejs
    |   |           |       |   |-- couchmove
    |   |           |       |   |   |-- changelog
    |   |           |       |   |       |-- V0__create_indexes.n1ql.ejs
    |   |           |       |   |       |-- V0.1__initial_setup
    |   |           |       |   |           |-- ROLE_ADMIN.json.ejs
    |   |           |       |   |           |-- ROLE_USER.json.ejs
    |   |           |       |   |           |-- user__admin.json.ejs
    |   |           |       |   |           |-- user__anonymoususer.json.ejs
    |   |           |       |   |           |-- user__system.json.ejs
    |   |           |       |   |           |-- user__user.json.ejs
    |   |           |       |   |-- cql
    |   |           |       |   |   |-- create-keyspace-prod.cql.ejs
    |   |           |       |   |   |-- create-keyspace.cql.ejs
    |   |           |       |   |   |-- drop-keyspace.cql.ejs
    |   |           |       |   |   |-- changelog
    |   |           |       |   |       |-- create-tables.cql.ejs
    |   |           |       |   |       |-- insert_default_users.cql.ejs
    |   |           |       |   |       |-- README.md.ejs
    |   |           |       |   |-- liquibase
    |   |           |       |       |-- master.xml.ejs
    |   |           |       |       |-- changelog
    |   |           |       |       |   |-- initial_schema.xml.ejs
    |   |           |       |       |-- data
    |   |           |       |           |-- authority.csv.ejs
    |   |           |       |           |-- oauth_client_details.csv.ejs
    |   |           |       |           |-- user.csv.ejs
    |   |           |       |           |-- user_authority.csv.ejs
    |   |           |       |-- i18n
    |   |           |       |   |-- messages.properties.ejs
    |   |           |       |-- static
    |   |           |       |   |-- microservices_index.html.ejs
    |   |           |       |-- swagger
    |   |           |       |   |-- api.yml.ejs
    |   |           |       |-- templates
    |   |           |           |-- error.html.ejs
    |   |           |           |-- mail
    |   |           |               |-- activationEmail.html.ejs
    |   |           |               |-- creationEmail.html.ejs
    |   |           |               |-- passwordResetEmail.html.ejs
    |   |           |-- test
    |   |               |-- features
    |   |               |   |-- gitkeep
    |   |               |   |-- user
    |   |               |       |-- user.feature.ejs
    |   |               |-- gatling
    |   |               |   |-- conf
    |   |               |       |-- gatling.conf.ejs
    |   |               |       |-- logback.xml.ejs
    |   |               |-- java
    |   |               |   |-- package
    |   |               |       |-- AbstractCassandraTest.java.ejs
    |   |               |       |-- ArchTest.java.ejs
    |   |               |       |-- CassandraKeyspaceIT.java.ejs
    |   |               |       |-- config
    |   |               |       |   |-- CassandraConfigurationIT.java.ejs
    |   |               |       |   |-- DatabaseConfigurationIT.java.ejs
    |   |               |       |   |-- SecurityBeanOverrideConfiguration.java.ejs
    |   |               |       |   |-- TestSecurityConfiguration.java.ejs
    |   |               |       |   |-- WebConfigurerTest.java.ejs
    |   |               |       |   |-- WebConfigurerTestController.java.ejs
    |   |               |       |   |-- timezone
    |   |               |       |       |-- HibernateTimeZoneIT.java.ejs
    |   |               |       |-- cucumber
    |   |               |       |   |-- CucumberContextConfiguration.java.ejs
    |   |               |       |   |-- CucumberIT.java.ejs
    |   |               |       |   |-- stepdefs
    |   |               |       |       |-- StepDefs.java.ejs
    |   |               |       |       |-- UserStepDefs.java.ejs
    |   |               |       |-- gateway
    |   |               |       |   |-- responserewriting
    |   |               |       |       |-- SwaggerBasePathRewritingFilterTest.java.ejs
    |   |               |       |-- repository
    |   |               |       |   |-- CustomAuditEventRepositoryIT.java.ejs
    |   |               |       |   |-- search
    |   |               |       |   |   |-- UserSearchRepositoryMockConfiguration.java.ejs
    |   |               |       |   |-- timezone
    |   |               |       |       |-- DateTimeWrapper.java.ejs
    |   |               |       |       |-- DateTimeWrapperRepository.java.ejs
    |   |               |       |-- security
    |   |               |       |   |-- DomainUserDetailsServiceIT.java.ejs
    |   |               |       |   |-- OAuth2TokenMockUtil.java.ejs
    |   |               |       |   |-- SecurityUtilsUnitTest.java.ejs
    |   |               |       |   |-- jwt
    |   |               |       |   |   |-- JWTFilterTest.java.ejs
    |   |               |       |   |   |-- TokenProviderTest.java.ejs
    |   |               |       |   |-- oauth2
    |   |               |       |       |-- AudienceValidatorTest.java.ejs
    |   |               |       |       |-- CookieCollectionTest.java.ejs
    |   |               |       |       |-- CookieTokenExtractorTest.java.ejs
    |   |               |       |       |-- OAuth2AuthenticationServiceTest.java.ejs
    |   |               |       |       |-- OAuth2CookieHelperTest.java.ejs
    |   |               |       |-- service
    |   |               |       |   |-- AuditEventServiceIT.java.ejs
    |   |               |       |   |-- MailServiceIT.java.ejs
    |   |               |       |   |-- UserServiceIT.java.ejs
    |   |               |       |   |-- mapper
    |   |               |       |       |-- UserMapperIT.java.ejs
    |   |               |       |-- web
    |   |               |           |-- rest
    |   |               |               |-- AccountResourceIT.java.ejs
    |   |               |               |-- AuditResourceIT.java.ejs
    |   |               |               |-- ClientForwardControllerIT.java.ejs
    |   |               |               |-- KafkaResourceIT.java.ejs
    |   |               |               |-- LogoutResourceIT.java.ejs
    |   |               |               |-- TestUtil.java.ejs
    |   |               |               |-- UserJWTControllerIT.java.ejs
    |   |               |               |-- UserResourceIT.java.ejs
    |   |               |               |-- errors
    |   |               |                   |-- ExceptionTranslatorIT.java.ejs
    |   |               |                   |-- ExceptionTranslatorTestController.java.ejs
    |   |               |-- resources
    |   |                   |-- logback.xml.ejs
    |   |                   |-- config
    |   |                   |   |-- application.yml.ejs
    |   |                   |   |-- bootstrap.yml.ejs
    |   |                   |-- i18n
    |   |                   |   |-- messages_en.properties.ejs
    |   |                   |-- templates
    |   |                       |-- mail
    |   |                           |-- testEmail.html.ejs
    |   |-- spring-controller
    |   |   |-- index.js
    |   |   |-- prompts.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- src
    |   |           |-- main
    |   |           |   |-- java
    |   |           |       |-- package
    |   |           |           |-- web
    |   |           |               |-- rest
    |   |           |                   |-- Resource.java.ejs
    |   |           |-- test
    |   |               |-- java
    |   |                   |-- package
    |   |                       |-- web
    |   |                           |-- rest
    |   |                               |-- ResourceIT.java.ejs
    |   |-- spring-service
    |   |   |-- index.js
    |   |   |-- USAGE
    |   |   |-- templates
    |   |       |-- src
    |   |           |-- main
    |   |               |-- java
    |   |                   |-- package
    |   |                       |-- service
    |   |                           |-- Service.java.ejs
    |   |                           |-- impl
    |   |                               |-- ServiceImpl.java.ejs
    |   |-- upgrade
    |       |-- index.js
    |       |-- USAGE
    |-- rfcs
    |   |-- 0-jhipster-rfc-template.md
    |   |-- 1-jhipster-rfc-k8s-operator.md
    |-- test
    |   |-- app.spec.js
    |   |-- ci-cd.spec.js
    |   |-- client.spec.js
    |   |-- common.spec.js
    |   |-- docker-compose.spec.js
    |   |-- ejslint.js
    |   |-- entity.spec.js
    |   |-- export-jdl.spec.js
    |   |-- generator-base-private.spec.js
    |   |-- generator-base.spec.js
    |   |-- heroku.spec.js
    |   |-- kubernetes.helm.spec.js
    |   |-- kubernetes.spec.js
    |   |-- languages.spec.js
    |   |-- load.spec.js
    |   |-- openapi-client.spec.js
    |   |-- openshift.spec.js
    |   |-- server.spec.js
    |   |-- spring-controller.spec.js
    |   |-- spring-service.spec.js
    |   |-- upgrade.spec.js
    |   |-- utils.spec.js
    |   |-- blueprint
    |   |   |-- app-blueprint.spec.js
    |   |   |-- client-blueprint.spec.js
    |   |   |-- common-blueprint.spec.js
    |   |   |-- entity-blueprint.spec.js
    |   |   |-- entity-client-blueprint.spec.js
    |   |   |-- entity-i18n-blueprint.spec.js
    |   |   |-- entity-server-blueprint.spec.js
    |   |   |-- languages-blueprint.spec.js
    |   |   |-- multiple-blueprints.spec.js
    |   |   |-- scoped-blueprint.spec.js
    |   |   |-- server-blueprint.spec.js
    |   |   |-- spring-controller-blueprint.spec.js
    |   |   |-- spring-service-blueprint.spec.js
    |   |-- cli
    |   |   |-- cli-utils.spec.js
    |   |   |-- cli.spec.js
    |   |   |-- import-jdl.spec.js
    |   |   |-- wait-until.spec.js
    |   |-- needle-api
    |   |   |-- needle-base.spec.js
    |   |   |-- needle-client-angular.spec.js
    |   |   |-- needle-client-i18n.spec.js
    |   |   |-- needle-client-react.spec.js
    |   |   |-- needle-client-webpack.spec.js
    |   |   |-- needle-client.spec.js
    |   |   |-- needle-server-cache.spec.js
    |   |   |-- needle-server-gradle.spec.js
    |   |   |-- needle-server-liquibase.spec.js
    |   |   |-- needle-server-maven.spec.js
    |   |   |-- templates
    |   |       |-- src
    |   |           |-- main
    |   |               |-- resources
    |   |                   |-- config
    |   |                       |-- liquibase
    |   |                           |-- changelog
    |   |                               |-- dummy_changelog.xml.ejs
    |   |-- templates
    |   |   |-- all-languages
    |   |   |   |-- .yo-rc.json
    |   |   |-- ci-cd
    |   |   |   |-- gradle-ngx-npm
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |-- gradle-ngx-yarn
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |-- maven-ngx-npm
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |-- maven-ngx-yarn
    |   |   |       |-- .project
    |   |   |       |-- .yo-rc.json
    |   |   |       |-- pom.xml
    |   |   |       |-- .settings
    |   |   |           |-- org.eclipse.m2e.core.prefs
    |   |   |-- compose
    |   |   |   |-- 01-gateway
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |   |   |-- main
    |   |   |   |   |       |-- docker
    |   |   |   |   |           |-- app.yml
    |   |   |   |   |           |-- mysql.yml
    |   |   |   |   |-- target
    |   |   |   |       |-- docker
    |   |   |   |           |-- jhgate-test.war
    |   |   |   |-- 02-mysql
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |   |   |-- main
    |   |   |   |   |       |-- docker
    |   |   |   |   |           |-- app.yml
    |   |   |   |   |           |-- mysql.yml
    |   |   |   |   |-- target
    |   |   |   |       |-- docker
    |   |   |   |           |-- msmysql-test.war
    |   |   |   |-- 03-psql
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |   |   |-- main
    |   |   |   |   |       |-- docker
    |   |   |   |   |           |-- app.yml
    |   |   |   |   |           |-- elasticsearch.yml
    |   |   |   |   |           |-- postgresql.yml
    |   |   |   |   |-- target
    |   |   |   |       |-- docker
    |   |   |   |           |-- mspsql-test.war
    |   |   |   |-- 04-mongo
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |   |   |-- main
    |   |   |   |   |       |-- docker
    |   |   |   |   |           |-- app.yml
    |   |   |   |   |           |-- mongodb-cluster.yml
    |   |   |   |   |           |-- mongodb.yml
    |   |   |   |   |-- target
    |   |   |   |       |-- docker
    |   |   |   |           |-- msmongodb-test.war
    |   |   |   |-- 05-cassandra
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |   |   |-- main
    |   |   |   |   |       |-- docker
    |   |   |   |   |           |-- app.yml
    |   |   |   |   |           |-- cassandra-cluster.yml
    |   |   |   |   |           |-- cassandra-migration.yml
    |   |   |   |   |           |-- cassandra.yml
    |   |   |   |   |-- target
    |   |   |   |       |-- docker
    |   |   |   |           |-- mscassandra-test.war
    |   |   |   |-- 06-uaa
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |   |   |-- main
    |   |   |   |   |       |-- docker
    |   |   |   |   |           |-- app.yml
    |   |   |   |   |           |-- mysql.yml
    |   |   |   |   |-- target
    |   |   |   |       |-- docker
    |   |   |   |           |-- uaaserver-test.war
    |   |   |   |-- 07-mariadb
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |   |   |-- main
    |   |   |   |   |       |-- docker
    |   |   |   |   |           |-- app.yml
    |   |   |   |   |           |-- mariadb.yml
    |   |   |   |   |-- target
    |   |   |   |       |-- docker
    |   |   |   |           |-- msmariadb-test.war
    |   |   |   |-- 08-monolith
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |   |   |-- main
    |   |   |   |   |       |-- docker
    |   |   |   |   |           |-- app.yml
    |   |   |   |   |           |-- elasticsearch.yml
    |   |   |   |   |           |-- mysql.yml
    |   |   |   |   |-- target
    |   |   |   |       |-- docker
    |   |   |   |           |-- sample-mysql-test.war
    |   |   |   |-- 09-kafka
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |   |   |-- main
    |   |   |   |   |       |-- docker
    |   |   |   |   |           |-- app.yml
    |   |   |   |   |           |-- kafka.yml
    |   |   |   |   |           |-- mysql.yml
    |   |   |   |   |-- target
    |   |   |   |       |-- docker
    |   |   |   |           |-- sample-kafka-test.war
    |   |   |   |-- 10-couchbase
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |   |   |-- main
    |   |   |   |   |       |-- docker
    |   |   |   |   |           |-- app.yml
    |   |   |   |   |           |-- couchbase-cluster.yml
    |   |   |   |   |           |-- couchbase.yml
    |   |   |   |   |-- target
    |   |   |   |       |-- docker
    |   |   |   |           |-- mscouchbase-test.war
    |   |   |   |-- 11-mssql
    |   |   |       |-- .yo-rc.json
    |   |   |       |-- src
    |   |   |       |   |-- main
    |   |   |       |       |-- docker
    |   |   |       |           |-- app.yml
    |   |   |       |           |-- mssql.yml
    |   |   |       |-- target
    |   |   |           |-- docker
    |   |   |               |-- msmssql-test.war
    |   |   |-- couchbase-with-relations
    |   |   |   |-- .yo-rc.json
    |   |   |-- default
    |   |   |   |-- .yo-rc.json
    |   |   |-- default-elasticsearch
    |   |   |   |-- .yo-rc.json
    |   |   |-- default-gateway
    |   |   |   |-- .yo-rc.json
    |   |   |   |-- .jhipster
    |   |   |       |-- Bar.json
    |   |   |       |-- Baz.json
    |   |   |       |-- Foo.json
    |   |   |-- default-microservice
    |   |   |   |-- .yo-rc.json
    |   |   |-- default-ng2
    |   |   |   |-- .yo-rc.json
    |   |   |-- default-psql
    |   |   |   |-- .yo-rc.json
    |   |   |-- documents-with-relations
    |   |   |   |-- orders-model.jdl
    |   |   |-- entity-dto-suffixes
    |   |   |   |-- .yo-rc.json
    |   |   |-- export-jdl
    |   |   |   |-- .yo-rc.json
    |   |   |   |-- .jhipster
    |   |   |       |-- Country.json
    |   |   |       |-- Department.json
    |   |   |       |-- Employee.json
    |   |   |       |-- Job.json
    |   |   |       |-- JobHistory.json
    |   |   |       |-- Location.json
    |   |   |       |-- NoEntity.txt
    |   |   |       |-- Region.json
    |   |   |       |-- Task.json
    |   |   |-- heroku
    |   |   |   |-- .yo-rc.json
    |   |   |-- import-jdl
    |   |   |   |-- .yo-rc.json
    |   |   |   |-- apps-and-entities-and-deployments.jdl
    |   |   |   |-- apps-and-entities.jdl
    |   |   |   |-- deployments.jdl
    |   |   |   |-- jdl-ambiguous.jdl
    |   |   |   |-- jdl.jdl
    |   |   |   |-- jdl2.jdl
    |   |   |   |-- search.jdl
    |   |   |   |-- single-app-and-entities.jdl
    |   |   |   |-- single-app-only.jdl
    |   |   |-- mongodb-with-relations
    |   |   |   |-- .yo-rc.json
    |   |   |-- ngx-blueprint
    |   |   |   |-- .yo-rc.json
    |   |   |   |-- custom-i18n.json.ejs
    |   |   |   |-- HelloKotlin.kt.ejs
    |   |   |   |-- HelloVue.html.ejs
    |   |   |-- noi18n
    |   |   |   |-- .yo-rc.json
    |   |   |-- openapi-client
    |   |   |   |-- petstore-openapi-3.yml
    |   |   |   |-- microservice-simple
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |-- microservice-with-client
    |   |   |   |   |-- .yo-rc.json
    |   |   |   |   |-- src
    |   |   |   |       |-- main
    |   |   |   |           |-- java
    |   |   |   |               |-- com
    |   |   |   |                   |-- mycompany
    |   |   |   |                       |-- myapp
    |   |   |   |                           |-- client
    |   |   |   |                               |-- petstore
    |   |   |   |                                   |-- PetsApiClientOld.java
    |   |   |   |-- monolith-simple
    |   |   |       |-- .yo-rc.json
    |   |   |-- uaaserver
    |   |       |-- uaa
    |   |           |-- .yo-rc.json
    |   |-- utils
    |       |-- expected-files.js
    |       |-- utils.js
    |-- test-integration
        |-- generate-sample.sh
        |-- configstore
        |   |-- insight-generator-jhipster.json
        |   |-- insight-yo.json
        |-- samples
        |   |-- .gitignore
        |   |-- README.md
        |   |-- .jhipster
        |   |   |-- BankAccount.json
        |   |   |-- CassBankAccount.json
        |   |   |-- CassTestEntity.json
        |   |   |-- CassTestMapstructEntity.json
        |   |   |-- CassTestServiceClassEntity.json
        |   |   |-- CassTestServiceImplEntity.json
        |   |   |-- Division.json
        |   |   |-- DocumentBankAccount.json
        |   |   |-- EntityWithDTO.json
        |   |   |-- EntityWithPagination.json
        |   |   |-- EntityWithPaginationAndDTO.json
        |   |   |-- EntityWithServiceClass.json
        |   |   |-- EntityWithServiceClassAndDTO.json
        |   |   |-- EntityWithServiceClassAndPagination.json
        |   |   |-- EntityWithServiceClassPaginationAndDTO.json
        |   |   |-- EntityWithServiceImpl.json
        |   |   |-- EntityWithServiceImplAndDTO.json
        |   |   |-- EntityWithServiceImplAndPagination.json
        |   |   |-- EntityWithServiceImplPaginationAndDTO.json
        |   |   |-- FieldTestEntity.json
        |   |   |-- FieldTestInfiniteScrollEntity.json
        |   |   |-- FieldTestMapstructEntity.json
        |   |   |-- FieldTestPagerEntity.json
        |   |   |-- FieldTestPaginationEntity.json
        |   |   |-- FieldTestServiceClassEntity.json
        |   |   |-- FieldTestServiceImplEntity.json
        |   |   |-- Label.json
        |   |   |-- MapsIdChildEntityWithDTO.json
        |   |   |-- MapsIdChildEntityWithoutDTO.json
        |   |   |-- MapsIdParentEntityWithDTO.json
        |   |   |-- MapsIdParentEntityWithoutDTO.json
        |   |   |-- MapsIdUserProfileWithDTO.json
        |   |   |-- MicroserviceBankAccount.json
        |   |   |-- MicroserviceLabel.json
        |   |   |-- MicroserviceOperation.json
        |   |   |-- Operation.json
        |   |   |-- Place.json
        |   |   |-- SuperMegaLargeTestEntity.json
        |   |   |-- TestCustomTableName.json
        |   |   |-- TestEntity.json
        |   |   |-- TestInfiniteScroll.json
        |   |   |-- TestManyRelPaginDTO.json
        |   |   |-- TestManyToMany.json
        |   |   |-- TestManyToOne.json
        |   |   |-- TestMapstruct.json
        |   |   |-- TestOneToOne.json
        |   |   |-- TestPager.json
        |   |   |-- TestPagination.json
        |   |   |-- TestServiceClass.json
        |   |   |-- TestServiceImpl.json
        |   |   |-- TestTwoRelationshipsSameEntity.json
        |   |-- app-sample-dev
        |   |   |-- .yo-rc.json
        |   |-- jdl-default
        |   |   |-- app.jdl
        |   |-- ms-micro-consul
        |   |   |-- .yo-rc.json
        |   |-- ms-micro-eureka
        |   |   |-- .yo-rc.json
        |   |-- ms-ngx-gateway-consul
        |   |   |-- .yo-rc.json
        |   |-- ms-ngx-gateway-eureka
        |   |   |-- .yo-rc.json
        |   |-- ms-ngx-gateway-eureka-oauth2
        |   |   |-- .yo-rc.json
        |   |-- ms-ngx-gateway-uaa
        |   |   |-- .yo-rc.json
        |   |-- ngx-couchbase
        |   |   |-- .yo-rc.json
        |   |-- ngx-default
        |   |   |-- .yo-rc.json
        |   |-- ngx-gradle-fr
        |   |   |-- .yo-rc.json
        |   |-- ngx-h2mem-ws-nol2
        |   |   |-- .yo-rc.json
        |   |-- ngx-mariadb-oauth2-sass-infinispan
        |   |   |-- .yo-rc.json
        |   |-- ngx-mongodb-kafka-cucumber
        |   |   |-- .yo-rc.json
        |   |-- ngx-psql-es-noi18n-mapsid
        |   |   |-- .yo-rc.json
        |   |-- ngx-session-cassandra-fr
        |   |   |-- .yo-rc.json
        |   |-- react-default
        |   |   |-- .yo-rc.json
        |   |-- react-noi18n-es-ws-gradle-session
        |   |   |-- .yo-rc.json
        |   |-- uaa
        |   |   |-- .yo-rc.json
        |   |-- webflux-mongodb
        |       |-- .yo-rc.json
        |-- scripts
            |-- 00-init-env.sh
            |-- 01-display-configuration.sh
            |-- 02-display-tools.sh
            |-- 03-system.sh
            |-- 04-git-config.sh
            |-- 10-install-jhipster.sh
            |-- 11-generate-entities.sh
            |-- 12-generate-project.sh
            |-- 13-replace-version-generated-project.sh
            |-- 14-jhipster-info.sh
            |-- 20-docker-compose.sh
            |-- 20-no-memory-limit-elasticsearch.sh
            |-- 21-tests-backend.sh
            |-- 22-tests-frontend.sh
            |-- 23-package.sh
            |-- 24-tests-e2e.sh
            |-- 25-sonar-analyze.sh
