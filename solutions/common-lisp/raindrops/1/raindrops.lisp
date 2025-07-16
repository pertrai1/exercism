(defpackage :raindrops
  (:use :cl)
  (:export :convert))

(in-package :raindrops)

;; Define the mapping
(defparameter *drops*
  '((3 . "Pling")
    (5 . "Plang")
    (7 . "Plong")))

(defun convert (n)
  (let ((result
         (reduce (lambda (acc curr)
                   (if (zerop (mod n (car curr)))
                       (concatenate 'string acc (cdr curr))
                       acc))
                 *drops*
                 :initial-value "")))
    (if (equal result "")
        (write-to-string n)
        result)))
