import gql from "graphql-tag";
export const ADD_VEHICLE = gql`
  mutation AddVehicle($name: String!) {
    insert_vehicle(objects: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation AddLocation($vehicleId: Int!, $location: String!) {
    insert_vehicle_location(
      objects: { vehicle_id: $vehicleId, location: $location }
    ) {
      returning {
        id
        location
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  subscription GetLocations($trackVehicles: [Int]!) {
    vehicle(where: { id: { _in: $trackVehicles } }) {
      locations(limit: 1, order_by: { timestamp: desc }) {
        location
      }
      id
      name
    }
  }
`;
export const GET_VEHICLES = gql`
  query {
    vehicle {
      id
      name
    }
  }
`;
