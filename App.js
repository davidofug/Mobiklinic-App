import React from 'react'
// import {AppRegistry} from 'react-native'
import Entry from './components/entry'
import {UserProvider} from './components/providers/User'
import {DiagnosisProvider} from './components/providers/Diagnosis'
import { DoctorsProvider } from './components/providers/Doctors'
// import {name as appName} from './app.json'

export const App = () => {
    return (
        <UserProvider>
            <DiagnosisProvider>
                <DoctorsProvider>
                    <Entry/>
                </DoctorsProvider>
            </DiagnosisProvider>
        </UserProvider>
    )
}

export default App
// AppRegistry.registerComponent(appName, () => App)