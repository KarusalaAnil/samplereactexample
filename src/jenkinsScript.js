/**
 * Get Bitbucket repo url
 * @return repo url
 */
let scmUrl = 'https://github.kp.org/CDTS/integration-batch-service.git'
/**
 * Get Bitbucket repo name
 * @return repo name
 */
export function getApplicationName(){
    // console.log('1');
    // console.log(getRepoUrl());
    // return getRepoUrl().tokenize('/').last().split("\\.")[0].toString().toLowerCase().trim()
    return 'integration-batch-service'.split("\\.")[0].toString().toLowerCase().trim();
}
/**
 * Get Bitbucket repo url
 * @return repo url
 */
function getRepoUrl(){
    return scmUrl.toString().toLowerCase().trim()
}
/**
 * Get Bitbucket project key
 * @return project key
 */
function getProjectKey() {
    // console.log('1');
    // console.log(getRepoUrl());
//   return getRepoUrl().tokenize('/')[-2].split("\\.")[0].toString().toLowerCase().trim()
return 'integration-batch-service';
}
export function getCleanBranchName() {
    return 'feature/cicdtroonboarding'.replace("/","_")
}