(ns clovis.core
  (:require [goog.dom :as gdom]
            [clovis.gmap]
            [clovis.material]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom])
  (:require-macros
    [devcards.core :refer [defcard]]))

(enable-console-print!)

(println "Hello world!")

(defcard "hello world")

(defui GMap
  Object
  (render [this]
          (dom/div nil "Hello, world!")))

(def gmap (om/factory GMap))

(defcard (gmap))

(defn main []
  (if-let [node (gdom/getElement "app")]
    (js/ReactDOM.render (gmap) node)))

(main)
