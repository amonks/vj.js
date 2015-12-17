(ns clovis.material
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [cljsjs.material]
            [react-util.core :as react]
            [om.dom :as dom])
  (:require-macros
    [devcards.core :refer [defcard]]))

(enable-console-print!)

(defui Slider
  Object
  (render [_]
          (dom/input #js {:className "mdl-slider mdl-js-slider"
                          :type "range"
                          :min 0
                          :max 100
                          :value 0
                          :tabIndex 0})))

(def slider (om/factory Slider))

(defcard slider (slider))

(defui Card
  Object
  (render [this]
          (dom/div #js {:className "mdl-card mdl-shadow--2dp"}
                   (get (om/props this) :children))))

(def card (om/factory Card))

(defcard card (card))

(defcard card-with-slider (card nil (slider)))

