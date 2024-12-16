import {getApplicationName,getUnifiedAppName,getCleanBranchName} from './jenkinsScript'

function JenkinsAppsFile() {
console.log(getApplicationName());
let unifiedAppName = getApplicationName()+"::"+getCleanBranchName();
let lockName = getApplicationName()+"_"+unifiedAppName+"_Checkmarx";
console.log(lockName);


    return(
        <div>
            
        </div>
    )
}
export default JenkinsAppsFile