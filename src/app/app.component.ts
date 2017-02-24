import { MarkerService } from './service/marker.service';
import { Component } from '@angular/core';
import {marker} from './marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MarkerService]
})
export class AppComponent {
  //Zoom level
  zoom: number = 10;
  //start data

  lat: number = 42.825588;
  lng: number = -71.018029;

  //values

  markerName:string;
  markerLat:string;
  markerLng: string;
  markerDraggable: string;

  markers: marker[];


  constructor(private markerService: MarkerService){
  
  this.markers = this.markerService.getMarkers();

  }

 clickedMarker(marker:marker, index: number){
    console.log('Clicked Marker:' + marker.name  + ' at index ' + index );
 } 
 mapClicked($event:any){
   console.log('$event', $event);
   var newMarker = {
     name:'Untitled',
     lat: $event.coords.lat,
     lng: $event.coords.lng,
     draggable: false
   }
   this.markers.push(newMarker);
 }

 markerDragEnd(marker:any, $event:any){
      console.log('dragend', marker, $event );

      var updMarker = {
        name: marker.name,
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
        draggable:false
      }
      var newLat = $event.coords.lat;
      var newLng = $event.coords.lng;

      this.markerService.updateMarker(updMarker, newLat, newLng);
 }

 addMarker(){
   console.log('Adding marker')
   if(this.markerDraggable == 'yes'){
     var isDraggable = true;

   }

   else{
      var isDraggable = false;
   }
  var newMarker ={
    name: this.markerName,
    lat:parseFloat(this.markerLat),
    lng:parseFloat(this.markerLng),
    draggable: isDraggable


  }

  this.markers.push(newMarker);
  this.markerService.addMarker(newMarker);
 }
 removeMarker(marker){
      console.log('Removing marker....');
      for(var i = 0; i < this.markers.length; i++){
          if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng){
            this.markers.splice(i, 1);
          }
      }
      this.markerService.removeMarker(marker);
   }
}