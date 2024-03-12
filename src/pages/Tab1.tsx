import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonAlert,IonButton } from '@ionic/react';

function Example() {
  return (
    <IonCard>
      <img alt="Grass" src="https://imgs.search.brave.com/ILsDnp_oP9XlSTqoTpObMpnxwFG0ska89WWwmiQ8Gr0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzM1NjM5MDYwOTEt/ZmRmZGZmYzNlM2M0/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRSOGZH/UmhjbXNsTWpCbmNt/VmxibnhsYm53d2ZI/d3dmSHg4TUE9PQ.jpeg" />
      <IonCardHeader>
        <IonCardTitle>Jay Ivan Octat</IonCardTitle>
        <IonCardSubtitle>My Ionic App</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  );
  <IonAlert>
    <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>
  </IonAlert>
}
export default Example;