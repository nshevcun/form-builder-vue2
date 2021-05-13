<template>
  <div id="app">
    <Header title="Form Builder" />

    <div class="centeralign">
      <p> Drag and drop the <b>form components</b> into the field below to build your custom form. Double-click an <b>already-added component</b> to <b>edit</b> it.</p>
    </div>

    <h3 class="menutitle">Form Components</h3>
    <div class="box">
      <!-- MENU -->
      <draggable class="list-group menu" :list="arrMenu" :options="menuOptions" @end="modalAppear" :clone="handleClone">
            
        <div class="list-group-item card" v-for="element in arrMenu"  :key="uuid(element)">
          {{element.name}} 
        </div>
      </draggable>

      <!-- BOARD -->
      <draggable class="list-group board" :list="arrBoard" group="cards">
        <div class="list-group-item card" v-for="element in arrBoard" :key="uuid(element)" :label="returnLabel(element)"  @dblclick="showModal = true">
          <!--<p class="ptest">X</p>   <- This was supposed to be a "Close" button -->
          {{element.name}} - Label: {{element.label}} - Placeholder: {{element.placeholder}}
          
        </div>
      </draggable>
    </div>

    <!-- DEFAULT MODAL -->
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false">
        
      </div>
    </transition>

    <transition name="fade" appear>
      <div class="modal-box" v-if="showModal">
        <h3> Edit the Component </h3>
        <br>
        <p class="modal-text">Create a label for this form component (e.g. First Name)</p>
        <input v-model="newLabel" placeholder="Your label here">
        <p class="modal-text">Specify directions on how this form component should be filled out.</p>
        <input v-model="newDirections" placeholder="Your directions here">
        <p class="modal-text">Specify a hint for how the form component should be filled out. (e.g. John)</p>
        <input v-model="newPlaceholder" placeholder="Your placeholder here">
        <Button text="Close" color="#B81C1C" @btn-click="showModal = false" />
      </div>
    </transition>

    <div class="centeralign">
      <Button text="Submit" color="steelblue" />
      <Button text="Clear" color="#B81C1C" @btn-click="clearAll()" />
    </div>

  </div>
</template>

<script>
import draggable from "vuedraggable";
import Header from "./components/Header";
import Button from "./components/Button";

export default {
  name: 'App',
  components: {
    draggable,
    Header,
    Button,
  },
  data() {
    return {
      showModal: false,

      // The following variables will be accepting custom names
      newLabel: "",
      newDirections: "",
      newPlaceholder: "",

      arrMenu: [
        {
          name: "Form Title",
          label: "",
          directions: "",
          placeholder: ""
        },
        {
          name: "Input Text Field",
          label: "",
          directions: "",
          placeholder: ""
        },
        {
          name: "Textarea",
          label: "",
          directions: "",
          placeholder: ""
        },
        {
          name: "Number",
          label: "",
          directions: "",
          placeholder: ""
        },
        {
          name: "Checkbox",
          label: "",
          directions: "",
          placeholder: ""
        },
        {
          name: "Dropdown",
          label: "",
          directions: "",
          placeholder: ""
        },
        {
          name: "Select Boxes",
          label: "",
          directions: "",
          placeholder: ""
        },
        {
          name: "Radio",
          label: "",
          directions: "",
          placeholder: ""
        },
        {
          name: "Email",
          label: "",
          directions: "",
          placeholder: ""
        },
        {
          name: "Button",
          label: "",
          directions: "",
          placeholder: ""
        }
      ],

      arrBoard: [],

      menuOptions: {
        group: {
          name: "cards",
          pull: "clone",
          put: false
        },
        sort: false
      }
    }
  },
  methods: {

    handleClone(card) {
      // Create a fresh copy of the card
      let cloneCard = JSON.parse(JSON.stringify(card));
      // Delete its current ID key
      this.$delete(cloneCard, 'id');
      // Return the clone without its old ID
      return cloneCard;
    },

    // Creating a unique ID key for each card
    uuid(card) {
      if (card.id) return card.id;

      const key = Math.random()
        .toString(16)
        .slice(2);

      this.$set(card, "id", key);

      return card.id;
    },

    // This shows the modal
    modalAppear() {
        this.showModal = true;
    },

    // This closes modal and clears the newLabel.
    // Unfortunately, it also clears the information in the cards as well.
    closeModal() {
      this.showModal = false;
      this.newLabel = "";
    },

    // LABELLING FUNCTIONS - W.I.P!

    // Not sure how to copy data from the newLabel data and only assign it to one card, rather than every card cloned into the field...
    returnLabel(card){
      let componentLabel = JSON.parse(JSON.stringify(this.newLabel));
      this.$set(card, "label", componentLabel);
      return card.label;
    },

    // The functions below don't work
    returnDirections(card){
      let cDirections = JSON.parse(JSON.stringify(this.newDirections));
      this.$set(card, "directions", cDirections);
      return card.directions;
    },

    returnPlaceholder(card){
      let cPlaceholder = JSON.parse(JSON.stringify(this.newPlaceholder));
      this.$set(card, "directions", cPlaceholder);
      return card.placeholder;
    },

    // Clearing the board

    clearAll() {
      this.arrBoard.splice(0, this.arrBoard.length);
    },

    // Deleting an individual item
    deleteCard(index) {
      this.arrBoard.splice(index, 1);
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

/* Universal box-sizing */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Determines fornt */
body {
  font-family: 'Poppins', sans-serif;
}

/* Box contains the Input Field Menu and Builder Field */
.box{
  display: flex;
  overflow-x: hidden;
}

p {
  margin: 0 30px 0 30px;
  font-size: 15px;
}

.ptest {
  margin: 0 30px 0 0;
  font-size: 15px;
}

.centeralign {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* START - BUTTON STYLING */

.btn {
  display: flex;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 25px 10px 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
/* END BUTTON STYLING */

input {
  margin-bottom: 10px;
  padding: 8px 8px 8px 8px;
  border: none;
  background-color: #cad8e6;
  font-family: inherit;
  width: 100%;
  border: none;
}

input:focus {
  outline: none !important;
  box-shadow: 0 0 4px steelblue;
}

/* START - BOARD STYLING */
.board {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px dashed steelblue;
  border-radius: 5px;
  background-color: #F0F5F7;
  max-width: 70%;
  min-width: 60%;
  min-height: 300px;
  margin: 0 15px 0 15px;
  padding: 10px;
}

.card {
    display: flex;
    width: 100%;
    height: 30px;
    overflow: hidden;
    border-radius: 3px;
    padding: 3px 0 3px 5px;
    color: white;
    background-color: steelblue;
    cursor: pointer;
    margin-bottom: 10px;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid steelblue;
  border-radius: 5px;
  max-width: 30%;
  min-width: 20%;
  min-height: 300px;
  margin: 0 0 0 30px; /* top right bottom left */
  padding: 15px;
  overflow: auto;
}

.menutitle {
  display: flex;
  align-items: flex-start;
  justify-content:  flex-start;
  max-width: 30%;
  min-width: 20%;
  margin: 20px 0 0 50px;
  color: steelblue;
}

/* END - BOARD STYLING */

/* START - MODAL STYLING */
.centerbox {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 97;
  background-color: rgba(0, 0, 0, 0.3);
}

/* Modal window will not show if the class is only called "modal". Needed another modifier to name.*/

.modal-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 98;
  width: 100%;
  max-width: 600px;
  background-color: #FFF;
  border-radius: 5px;
  padding: 20px;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.modal-text {
  margin: 0 3px 0 3px;
  font-size: 14px;
}

</style>
