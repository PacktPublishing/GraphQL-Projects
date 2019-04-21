import gql from "graphql-tag";
export const ADD_VEHICLE = gql`
  mutation AddVehicle($name: String!) {
    insert_vehicle(objects: { name: $name }) {
      returning {
        id
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
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  subscription {
    vehicle {
      locations(limit: 1, order_by: { timestamp: desc }) {
        location
      }
      id
      name
    }
  }
`;
