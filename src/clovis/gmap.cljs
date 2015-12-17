(ns clovis.gmap
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom])
  (:require-macros
    [devcards.core :refer [defcard]]))

(enable-console-print!)

(def app-state
  (atom {:longitude -34.397
         :latitude 150.644
         :zoom 10}))

(defcard app-state
  "should store app state"
  @app-state)

(defn construct-opts
  [atom-state]
  {"zoom" (:zoom @atom-state)
   "mapTypeId" js/google.maps.MapTypeId.SATELLITE
   "center" (google.maps.LatLng.
              (:longitude @atom-state)
              (:latitude @atom-state))})

(defcard construct-opts
  "should construct options"
  (construct-opts app-state))

(defn js-opts [atom-state]
  (clj->js (construct-opts atom-state)))

(defcard js-opts
  "construct a google map options object"
  (js-opts app-state))

(defn map-did-mount [this]
  (let [map-canvas (dom/node this)]
    (js/google.maps.Map. map-canvas (js-opts app-state))
    #_(listen-for-events the-map)))

(defui GMap
  Object
  (render [_]
          (dom/div #js {:style #js {:height "600px"}}))
  (componentDidMount [this]
                     (map-did-mount this)))

(def gmap (om/factory GMap))

(defcard (gmap))

