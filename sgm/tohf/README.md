# Capture and extraction of gesture data

The following is a brief description of how to ... 

1. record a gesture sample with the Leap motion device
2. extract postion and velocity data from recorded samples


## Recording a gesture sample

Use the [leap-record](https://github.com/joyrexus/leap-record#leap-record) command-line utility to record a gesture sample.  After installing, you'd use it as follows:

    leap-record MY-SAMPLE.ldj

If you don't specify a filename it saves the file as `sample.ldj`.

You'll get get prompted to start and stop the recording.

The resulting sample file contains leap frame data saved as [line-delimited JSON](http://en.wikipedia.org/wiki/Line_Delimited_JSON).  This is a convenient format for the reading and writing of data streams.  For example, such a format makes it easy to extract specific attributes from each line/frame.  The [ldj-pipe] (https://github.com/joyrexus/ldj-pipe#ldj-pipe) is designed to make this sort of streaming data extraction easy and straightforward.


## Extracting position/velocity data

Once you have a sample recorded, you can load and view it ...

