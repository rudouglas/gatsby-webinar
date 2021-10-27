import { Box, Stack, Button, Text, HStack, Img, Link} from '@chakra-ui/react'
import * as React from 'react'
import { Step } from './Step'
import { StepContent } from './StepContent'
import { Steps } from './Steps'
import { useSteps } from './useSteps'

const VerticalSteps = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <Box
      mx="auto"
      maxW="3xl"
      py="10"
      px={{
        base: '6',
        md: '8',
      }}
      minH="400px"
    >
      <Steps activeStep={activeStep}>
        <Step title="Sign up for New Relic One">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
              New Relic One is a world-class observability platform that helps developers monitor, debug, and optimize their entire stack.
              </Text>
              <a href="https://newrelic.com/signup?utm_source=jamstackconf&utm_medium=organic_social&utm_campaign=global-fy22-q2-gatsby_build&utm_content=event" target="_blank">
              <Button
                mt="8"
                minW="14rem"
                colorScheme="pink"
                size="lg"
                height="14"
                bg="#FF0081"
                px="8"
                fontSize="md"
                fontWeight="bold"
                _hover={{
                  bg: "#b8005d"
                }}
              >
                Sign up for New Relic One
              </Button>
              </a>
              <Img
                objectFit="cover"
                w="full"
                h="full"
                htmlWidth="576px"
                htmlHeight="420px"
                src="/nr1.png"
                alt="Bring team together"
                />
                
              <HStack>
                <Button size="sm" variant="ghost" isDisabled>
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Next
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
        <Step title="Configure and Deploy your app">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <b>Click the Deploy to Netlify badge. Link your Github Account.</b>
              <Link href="https://app.netlify.com/start/deploy?repository=https://gitlab.com/dgkim2/jankstack-demo" isExternal>
              <Img
                objectFit="cover"
                w="full"
                h="full"
                maxWidth="200px"
                src="https://www.netlify.com/img/deploy/button.svg"
                alt="Bring team together"
                />
                </Link>
              <Img
                objectFit="cover"
                w="full"
                h="full"
                htmlWidth="576px"
                htmlHeight="420px"
                src="/steps/4.png"
                alt="Github Signup"
                />
            
              <HStack>
                <Button size="sm" onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Next
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
        <Step title="Add New Relic API Keys on Netlify">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">

              <Img
                objectFit="cover"
                w="full"
                h="full"
                htmlWidth="576px"
                htmlHeight="420px"
                src="/steps/2.png"
                alt="Github Signup"
                />
                <Text>For <b>NEW RELIC INGEST LICENSE KEY and Account ID</b> head to <a href="https://one.newrelic.com">New Relic One</a>, click on the account dropdown menu on the top right, and select <b>API KEYS</b></Text>
                <Img
                objectFit="cover"
                w="full"
                h="full"
                htmlWidth="576px"
                htmlHeight="420px"
                src="/steps/5.png"
                alt="Github Signup"
                />

                Copy and paste the account ID on the left, and click COPY KEY to get the `INGEST LICENSE KEY`. Make sure you are copying the INGEST LICENSE KEY.

              <HStack>
                <Button size="sm" onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Next
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
        <Step title="Your ✨Beautiful✨ dashboard is done!">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
                Head to <a href="https://one.newrelic.com/?utm_source=jamstackconf&utm_medium=event&utm_campaign=global-fy22-q3-jamstackconf">New Relic One and find your Gatsby build</a>
              </Text>
              <Img
                objectFit="cover"
                w="full"
                h="full"
                htmlWidth="576px"
                htmlHeight="420px"
                src="/dash.png"
                alt="Bring team together"
                />
                <Img
                objectFit="cover"
                w="full"
                h="full"
                htmlWidth="576px"
                htmlHeight="420px"
                src="/final.png"
                alt="Bring team together"
                />
              <HStack>
                <Button size="sm" onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Next
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
        <Step title="Tweet @newrelic and @gatsbyjs with your dashboard">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
                Tag @newrelic and @gatsbyjs with the autoinstrumented dashboard on Twitter. We will DM you to get your powerbank shipped to you! 
              </Text>
              <Img
                objectFit="cover"
                w="full"
                h="full"
                htmlWidth="576px"
                htmlHeight="420px"
                src="/steps/3.png"
                alt="Bring team together"
                />
                <Text>Participation notes: If your dashboard exposes any private data, we will work with you to anonymize your entries. Don’t hesitate to message us with any questions and we’ll do our best to help you participate.</Text>
              <HStack>
                <Button size="sm" onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Finish
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
      </Steps>
      <HStack display={activeStep === 3 ? 'flex' : 'none'} mt="10" spacing="4" shouldWrapChildren>
        <Text>All steps completed - you&apos;re finished</Text>
        <Button size="sm" onClick={reset} variant="outline" verticalAlign="baseline">
          Reset
        </Button>
      </HStack>
    </Box>
  )
}

export default VerticalSteps