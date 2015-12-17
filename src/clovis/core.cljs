(ns clovis.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom])
  (:require-macros
    [devcards.core :refer [defcard]]))

(enable-console-print!)

(println "Hello world!")

(defcard "hello world")

(defn main []
  (if-let [node (.getElementById js/document "main-app-area")]
    (println "launch app")))

(main)
