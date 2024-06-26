import React from "react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface InvitationStateTypes {
  content: any[];
  createdBy: string;
  createdById: string;
  description: string;
  id: string;
  name: string;
  published: boolean;
  sharedURL: any;
}

interface InvitationObjectStoreTypes {
  invitations: InvitationStateTypes[];
}

const initialState: InvitationObjectStoreTypes = {
  invitations: [],
};

export const invitationSlice = createSlice({
  name: "invitation",
  initialState,
  reducers: {
    populateInvitation: (state, action: PayloadAction<any>) => {
      action.payload.forEach((element: InvitationStateTypes) => {
        state.invitations = [
          ...state.invitations,
          {
            content: element.content,
            createdBy: element.createdBy,
            createdById: element.createdById,
            description: element.description,
            id: element.id,
            name: element.name,
            published: element.published,
            sharedURL: element.sharedURL,
          },
        ];
      });
    },
    addInvitations: (state, action: PayloadAction<any>) => {
      state.invitations = [
        ...state.invitations,
        {
          content: action.payload.data[0].content,
          createdBy: action.payload.data[0].createdBy,
          createdById: action.payload.data[0].createdById,
          description: action.payload.data[0].description,
          id: action.payload.data[0].id,
          name: action.payload.data[0].name,
          published: action.payload.data[0].published,
          sharedURL: action.payload.data[0].sharedURL,
        },
      ];
    },
    removeInvitation: (state, action: PayloadAction<any>) => {
      state.invitations = state.invitations.filter(
        (inv) => inv.id !== action.payload
      );
    },
  },
});

export const { populateInvitation, addInvitations, removeInvitation } =
  invitationSlice.actions;

export const getAllInvitations = (state: RootState) =>
  state?.invitation.invitations;

export default invitationSlice;
