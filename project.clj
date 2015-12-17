(defproject clovis "0.1.0-SNAPSHOT"
  :description "Clovis"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha22" :exclusions [cljsjs/react]]
                 [cljsjs/material "1.0.6-0"]
                 [devcards "0.2.1-2"]
                 [cljsjs/google-maps "3.18-1"]
                 #_[figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-1"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "devcards"
                        :source-paths ["src"]
                        :figwheel { :devcards true } ;; <- note this
                        :compiler { :main       "clovis.core"
                                    :asset-path "js/compiled/devcards_out"
                                    :output-to  "resources/public/js/compiled/clovis_devcards.js"
                                    :output-dir "resources/public/js/compiled/devcards_out"
                                    :source-map-timestamp true }}
                       {:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "clovis.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/clovis.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "clovis.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/clovis.js"
                                   :optimizations :advanced}}]}

  :figwheel { :css-dirs ["resources/public/css"] })
