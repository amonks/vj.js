(ns react-util.core)

(defn build [component props]
  (let [React (.-React js/window)]
    (.createElement React component (clj->js props))))

