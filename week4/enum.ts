enum Environment{
    LOCAL = 'local',
    DEVELOPMENT = 'dev',
    STAGING = 'stage',
    PRODUCTION = 'prod'
}

function runTests(env : Environment) : void
{
    console.log(`The test running = ${env}`)
}

runTests(Environment.PRODUCTION)
runTests(Environment.DEVELOPMENT)