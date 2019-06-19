import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import { snazzyTheme } from "../utils/snazzymaps"
import MarkerMap from "../images/marker_map.inline.svg"
const Marker = () => (
  <div>
    <MarkerMap />
  </div>
)

class ContactMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.28502,
      lng: 20.875387,
    },
    zoom: 11,
  }

  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_TOKEN }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{
            styles: snazzyTheme,
          }}
        >
          <Marker lat={52.28502} lng={20.875387} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default ContactMap
